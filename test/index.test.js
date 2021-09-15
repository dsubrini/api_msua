import { expect, server, BASE_URL } from './setup';

describe('Index de la page de test', () => {
    it('Afficher la page d\'accueil du site', done => {
        server
            .get(`${BASE_URL}/v1`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal('hello world');
                done();
            });
    });
});
