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
