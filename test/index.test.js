import { expect, server, BASE_URL } from './setup';

describe('Index de la page de test', function () {
    it('Afficher la page d\'accueil du site', function (done) {
        server
            .get(`${BASE_URL}`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal('hello world');
                done();
            });
    });
});
