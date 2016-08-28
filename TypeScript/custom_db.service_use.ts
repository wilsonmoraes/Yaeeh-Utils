    //Insert ou Update
	public salvarAbastecimento(vendedor:any){
        this.customDB.insert(`insert into vendedor (id, version, nome) values (?,?,?)`, 
		[vendedor.id, vendedor.version, vendedor.nome]).subscribe(res =>{
            console.log('inserido');
        }, err =>{
			console.log('falha');
        })
    }
	//findAll
	    public listar(): any {
        this.clientes = [];
        this.customDB.queryAll(`select * from cliente`).subscribe(res => {
            res.forEach(item => {
                this.clientes.push(item);
            });
        }, err => {
            console.log(err);
        });
		
	//findOne
	public buscarClientePeloId(idCliente: number): any {
        var cliente:any;
        
        this.customDB.queryUnic(`select * from clientes where id=?`, [idCliente]).subscribe(res=>{
            cliente = res;
        }, err=>{
            console.log(err);
        });