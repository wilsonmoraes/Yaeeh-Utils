package br.com.cerbero.pw.helper;

import br.com.vision.framework.exceptions.BusinessException;
import br.com.vision.framework.exceptions.InfrastructureException;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.net.ssl.SSLContext;
import java.security.cert.X509Certificate;
import java.util.Map;

/**
 * Created by Wilson on 20/04/2017.
 */

@Component
public class ReceitaWsHelper {

    private static final String RECEITA_WS_API = "https://receitaws.com.br/v1/cnpj/";


    /**
     * Método responsável por procurar o cliente no ws da receita federal.
     *
     * @param cnpj
     * @return
     */
    public Map<String, Object> obterPorCnpjNaReceita(String cnpj) {
        cnpj = cnpj.replaceAll("\\D+", "");
        ParameterizedTypeReference<Map<String, Object>> typeRef = new ParameterizedTypeReference<Map<String, Object>>() {
        };
        RestTemplate restTemplate = novoRestTemplateSemCertificado();
        ResponseEntity<Map<String, Object>> response = restTemplate.exchange(RECEITA_WS_API.concat(cnpj.replaceAll("\\D+", "")), HttpMethod.GET, null, typeRef);
        Map<String, Object> retorno = null;
        if (response.getStatusCode().equals(HttpStatus.OK)) {
            if (String.valueOf(retorno.get("status")).equalsIgnoreCase("OK")) {
                retorno = response.getBody();
            }
        } else if (response.getStatusCode().equals(HttpStatus.GATEWAY_TIMEOUT)) {
            throw new BusinessException("O CNPJ informado não é um CNPJ válido na receita federal. Entre em contato conosco através da área de contato.");
        }
        return retorno;
    }


    private RestTemplate novoRestTemplateSemCertificado() {
        try {

            TrustStrategy acceptingTrustStrategy = (X509Certificate[] chain, String authType) -> true;

            SSLContext sslContext = org.apache.http.ssl.SSLContexts.custom()
                    .loadTrustMaterial(null, acceptingTrustStrategy)
                    .build();

            SSLConnectionSocketFactory csf = new SSLConnectionSocketFactory(sslContext);

            CloseableHttpClient httpClient = HttpClients.custom()
                    .setSSLSocketFactory(csf)
                    .build();

            HttpComponentsClientHttpRequestFactory requestFactory =
                    new HttpComponentsClientHttpRequestFactory();

            requestFactory.setHttpClient(httpClient);


            RestTemplate restTemplate = new RestTemplate(requestFactory);
            restTemplate.getInterceptors().add((request, body, execution) -> {
                ClientHttpResponse response = execution.execute(request, body);
                response.getHeaders().setContentType(MediaType.APPLICATION_JSON);
                return response;
            });
            return restTemplate;
        } catch (Exception ex) {
            throw new InfrastructureException(ex);

        }
    }
}
