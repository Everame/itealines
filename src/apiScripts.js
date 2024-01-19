export async function sendRequest(method, url, body = null) {
  //Заголовок запроса с API аутенфикатором
  const headers = {
      'x-access-token': '321d6a221f8926b5ec41ae89a3b2ae7b'
    }
  
    //Отправка запроса с заданными параметрами url, метода отправки
    return await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers
    }).then(async response => {
      //Если ответ успешно получен возвращаю его
      if (response.ok) {
        return await response.json()
      }
      //Если ответ не получен возвращаю ошибку
      return await response.json().then(error => {
        const e = new Error('Что-то пошло не так')
        e.data = error
        throw e
      })
    })
  }

//Ответ полученный с запроса к api https://api.travelpayouts.com/v2/prices
export const data = [
  {"depart_date":"2024-01-27","origin":"LED","destination":"ARH","gate":"Smartavia","return_date":"2024-01-27","found_at":"2024-01-18T05:32:03","trip_class":0,"value":2600,"number_of_changes":0,"duration":195,"distance":756,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-27","origin":"ARH","destination":"LED","gate":"Smartavia","return_date":"2024-02-01","found_at":"2024-01-18T05:25:00","trip_class":0,"value":2600,"number_of_changes":0,"duration":195,"distance":756,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-24","origin":"LED","destination":"KGD","gate":"Kupi.com","return_date":"2024-01-31","found_at":"2024-01-18T05:31:56","trip_class":0,"value":3248,"number_of_changes":3,"duration":235,"distance":798,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-26","origin":"LED","destination":"MOW","gate":"MEGO.travel","return_date":"2024-02-07","found_at":"2024-01-18T05:20:03","trip_class":0,"value":3540,"number_of_changes":0,"duration":185,"distance":598,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-24","origin":"MOW","destination":"LED","gate":"Kupi.com","return_date":"2024-01-26","found_at":"2024-01-18T05:31:30","trip_class":0,"value":3562,"number_of_changes":0,"duration":180,"distance":598,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-21","origin":"IWA","destination":"KGD","gate":"Clickavia","return_date":"2024-01-25","found_at":"2024-01-18T05:26:46","trip_class":3,"value":3652,"number_of_changes":0,"duration":405,"distance":1284,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-19","origin":"MOW","destination":"KZN","gate":"MEGO.travel","return_date":"2024-01-23","found_at":"2024-01-18T05:32:54","trip_class":0,"value":3748,"number_of_changes":0,"duration":210,"distance":742,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-23","origin":"KZN","destination":"MOW","gate":"MEGO.travel","return_date":"2024-01-24","found_at":"2024-01-18T05:24:06","trip_class":2,"value":3748,"number_of_changes":0,"duration":210,"distance":742,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-26","origin":"MOW","destination":"ARH","gate":"Smartavia","return_date":"2024-01-29","found_at":"2024-01-18T05:30:14","trip_class":0,"value":3800,"number_of_changes":3,"duration":225,"distance":976,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-19","origin":"SVX","destination":"IJK","gate":"Izhavia","return_date":"2024-01-21","found_at":"2024-01-18T05:19:18","trip_class":0,"value":3800,"number_of_changes":0,"duration":120,"distance":446,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-30","origin":"MOW","destination":"PKV","gate":"Azimuth","return_date":"2024-01-31","found_at":"2024-01-18T05:26:38","trip_class":1,"value":3910,"number_of_changes":0,"duration":165,"distance":600,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-26","origin":"PKV","destination":"MOW","gate":"Kupi.com","return_date":"2024-01-28","found_at":"2024-01-18T05:26:29","trip_class":0,"value":4079,"number_of_changes":1,"duration":165,"distance":600,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-24","origin":"SVX","destination":"TJM","gate":"Biletix","return_date":"2024-01-26","found_at":"2024-01-18T05:27:55","trip_class":0,"value":4127,"number_of_changes":0,"duration":150,"distance":279,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-27","origin":"PKV","destination":"AER","gate":"Azimuth","return_date":"2024-01-30","found_at":"2024-01-18T05:21:58","trip_class":0,"value":4260,"number_of_changes":0,"duration":495,"distance":1790,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-27","origin":"IKT","destination":"UUD","gate":"S7 Airlines","return_date":"2024-01-28","found_at":"2024-01-18T05:30:53","trip_class":2,"value":4300,"number_of_changes":1,"duration":110,"distance":220,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-25","origin":"OVB","destination":"KEJ","gate":"S7 Airlines","return_date":"2024-01-26","found_at":"2024-01-18T05:24:17","trip_class":0,"value":4310,"number_of_changes":2,"duration":100,"distance":221,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-23","origin":"KEJ","destination":"OVB","gate":"S7 Airlines","return_date":"2024-01-28","found_at":"2024-01-18T05:23:41","trip_class":2,"value":4310,"number_of_changes":0,"duration":100,"distance":221,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-19","origin":"PEE","destination":"NNM","gate":"Kupi.com","return_date":"2024-01-22","found_at":"2024-01-18T05:31:41","trip_class":0,"value":4396,"number_of_changes":0,"duration":230,"distance":1087,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-18","origin":"LED","destination":"UFA","gate":"Kupi.com","return_date":"2024-01-25","found_at":"2024-01-18T05:26:12","trip_class":0,"value":4445,"number_of_changes":1,"duration":345,"distance":1634,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-26","origin":"ULY","destination":"MOW","gate":"Kupi.com","return_date":"2024-01-29","found_at":"2024-01-18T05:28:22","trip_class":3,"value":4548,"number_of_changes":0,"duration":200,"distance":713,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-19","origin":"MOW","destination":"SVX","gate":"Kupi.com","return_date":"2024-01-21","found_at":"2024-01-18T05:20:17","trip_class":0,"value":4548,"number_of_changes":3,"duration":315,"distance":1436,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-22","origin":"MOW","destination":"ULY","gate":"MEGO.travel","return_date":"2024-01-25","found_at":"2024-01-18T05:28:11","trip_class":0,"value":4548,"number_of_changes":0,"duration":200,"distance":713,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-20","origin":"MOW","destination":"MSQ","gate":"MEGO.travel","return_date":"2024-01-24","found_at":"2024-01-18T05:30:41","trip_class":1,"value":4585,"number_of_changes":1,"duration":190,"distance":623,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-29","origin":"GOJ","destination":"LED","gate":"Smartavia","return_date":"2024-02-07","found_at":"2024-01-18T05:22:59","trip_class":0,"value":4790,"number_of_changes":0,"duration":240,"distance":886,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-26","origin":"ARH","destination":"MOW","gate":"Smartavia","return_date":"2024-01-27","found_at":"2024-01-18T05:31:00","trip_class":0,"value":4800,"number_of_changes":2,"duration":225,"distance":976,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-26","origin":"KGD","destination":"MOW","gate":"MEGO.travel","return_date":"2024-01-29","found_at":"2024-01-18T05:32:21","trip_class":1,"value":4923,"number_of_changes":0,"duration":325,"distance":1066,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-20","origin":"LED","destination":"KLF","gate":"Azimuth","return_date":"2024-01-22","found_at":"2024-01-18T05:25:59","trip_class":0,"value":4960,"number_of_changes":2,"duration":180,"distance":688,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-28","origin":"SVX","destination":"MQF","gate":"Kupi.com","return_date":"2024-02-04","found_at":"2024-01-18T05:23:19","trip_class":0,"value":5005,"number_of_changes":0,"duration":130,"distance":383,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-19","origin":"AER","destination":"MOW","gate":"OneTwoTrip","return_date":"2024-01-22","found_at":"2024-01-18T05:31:09","trip_class":0,"value":5006,"number_of_changes":0,"duration":430,"distance":1364,"show_to_affiliates":true,"actual":true},
  {"depart_date":"2024-01-25","origin":"KUF","destination":"MOW","gate":"SuperKassa.ru","return_date":"2024-01-31","found_at":"2024-01-18T05:31:52","trip_class":0,"value":5033,"number_of_changes":0,"duration":225,"distance":859,"show_to_affiliates":true,"actual":true}
];
