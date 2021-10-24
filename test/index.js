const authCtrl = require('../controllers/auth');

const init = async () => {
    // const result = await authCtrl.login('lalala', 123);
    // console.log(result);

    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTYzNTEwMTM5M30.pQ8Mub_848PvIiH6tGUQLUAMmUq-PHlSFimf0c4U7GKieo2ZfgPXmoBQK6wbmBjRVcqcCVQBaXYnIQz4u7j9w6YIORdL69RC_qT1f_HRg3sN8V1wZLCdkvvvAVI_aAyAuzqXTlzBe4eJLh9vn-e4_irkm5Vl63WpRCVhVt5BdJkCWYm8dtGRsJaHNMd9QLVv6DZhDNguzU2i4m9J_ojietxsywlihILD0GQZNJuQfs4gmCC5HqkxlYnZuq64Gl4YIjmWSzEtbMTFZtAu-iJQWg_5B6ZdcfD-rvsXbnGHoJFy5-bUyjxDm80zUZmLZSICss-ZwarTHS-JP5BlapgOkA';
    const result = await authCtrl.checkAndDecode(token);
    console.log(result);
};
init(); 