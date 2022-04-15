var request = require("supertest")
request = request('https://viacep.com.br/')

describe('Testando Via CEP', () => {
    it('Consulta de CEP válido', async () => {
        const response = await request.get('ws/09691200/json/')
        
        console.log(response.body)
        expect(response.status).toEqual(200)
        expect(response.body.cep).toEqual('09691-200')
        expect(response.body.logradouro).toEqual('Rua Cásper Líbero')
        expect(response.body.complemento).toEqual('até 929/930')
        expect(response.body.bairro).toEqual('Paulicéia')
        expect(response.body.localidade).toEqual('São Bernardo do Campo')
        expect(response.body.uf).toEqual('SP')
        expect(response.body.ibge).toEqual('3548708')
        expect(response.body.gia).toEqual('6350')
        expect(response.body.ddd).toEqual('11')
        expect(response.body.siafi).toEqual('7075')
    })
})