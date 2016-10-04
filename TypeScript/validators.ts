private validarCPF(cpf: string) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '') {
            return false;
        }
        let CPFinvalidosConhecidos = {
            '00000000000': true,
            '11111111111': true,
            '22222222222': true,
            '33333333333': true,
            '44444444444': true,
            '55555555555': true,
            '66666666666': true,
            '77777777777': true,
            '88888888888': true,
            '99999999999': true,
            '12345678909': true
        };
        // Elimina CPFs invalidos conhecidos
        if (cpf.length != 11 || CPFinvalidosConhecidos['cpf']) {
            return false;
        }
        // Valida 1o digito
        let add: number = 0;
        for (let i = 0; i < 9; i++) {
            add += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let rev: number = 11 - (add % 11);
        if (rev == 10 || rev == 11) {
            rev = 0;
        }
        if (rev != parseInt(cpf.charAt(9))) {
            return false;
        }
        // Valida 2o digito
        add = 0;
        for (let i = 0; i < 10; i++) {
            add += parseInt(cpf.charAt(i)) * (11 - i);
        }
        rev = 11 - (add % 11);

        if (rev == 10 || rev == 11) {
            rev = 0;
        }

        if (rev != parseInt(cpf.charAt(10))) {
            return false;
        } else {
            return true;
        }
    }


/**
     *
     * @param nascimento receive: 'dd/mm/yyyy'
     * @returns {boolean}
     */
    private validarNascimentoDDMMYYYY(nascimento: string) {
        nascimento = nascimento.replace(/[^\d]+/g, '');
        if (nascimento.length != 8) {
            return false;
        }
        let dia: string = nascimento.substring(0, 2);
        let mes: string = nascimento.substring(2, 4);
        let ano: string = nascimento.substring(4, 8);

        let nascimentoDate: Date = new Date(parseInt(ano), parseInt(mes), parseInt(dia));
        if (new Date() < nascimentoDate) {
            return false;
        }
        return true;
    }

 /**
     *
     * @param telefone
     * @returns {boolean}
     */
    private validarTelefone(telefone: string) {

        //retira todos os caracteres menos os numeros
        telefone = telefone.replace(/\D/g, '');

        //verifica se tem a qtde de numero correto
        if (!(telefone.length >= 10 && telefone.length <= 11)) {
            return false;
        }


        //Se tiver 11 caracteres, verificar se começa com 9 o celular
        if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) {
            return false;
        }


        //verifica se não é nenhum numero digitado errado (propositalmente)
        for (let n = 0; n < 10; n++) {
            //um for de 0 a 9.
            //estou utilizando o metodo Array(q+1).join(n) onde "q" é a quantidade e n é o
            //caractere a ser repetido
            if (telefone == new Array(11).join(`${n}`) || telefone == new Array(12).join(`${n}`)) {
                return false;
            }
        }
        //DDDs validos
        let codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
            21, 22, 24, 27, 28, 31, 32, 33, 34,
            35, 37, 38, 41, 42, 43, 44, 45, 46,
            47, 48, 49, 51, 53, 54, 55, 61, 62,
            64, 63, 65, 66, 67, 68, 69, 71, 73,
            74, 75, 77, 79, 81, 82, 83, 84, 85,
            86, 87, 88, 89, 91, 92, 93, 94, 95,
            96, 97, 98, 99];
        //verifica se o DDD é valido (sim, da pra verificar rsrsrs)
        if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) {
            return false;
        }


        //  E por ultimo verificar se o numero é realmente válido.
        if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) {
            return false;
        }

        //se passar por todas as validações acima, então está tudo certo
        return true;
    }
