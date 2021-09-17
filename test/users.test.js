import { expect, BASE_URL, server } from './setup';

describe('Utilisateurs', () => {
    it('Affichage des utilisateurs', () => {
        server
            .get(`${BASE_URL}/users`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.users).to.be.instanceOf(Array);
                res.body.users.forEach((m) => {
                    expect(m).to.have.property('id');
                });
            });
    });
});
