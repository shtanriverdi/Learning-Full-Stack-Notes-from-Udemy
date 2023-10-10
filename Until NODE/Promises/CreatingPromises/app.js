const colorRequest = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve('green');
        }, 1000);
    });
}

let promise = colorRequest('yellow');

promise
    .then((value) => {
        return colorRequest(value)
    })
    .then(() => {
        return colorRequest('orange')
    })
    .then(() => {
        return colorRequest('lightgreen')
    })
    .catch(() => {})

// Bu satır hemen çalışacak, çünkü yukardakilerin hepsini WebAPI ler yapıyor,
// yani browser yapıyor, MicroQueue ve MacroQueue var işin içinde ve hepsi,
    // Asyncron olarak çalışıyor ve NON-BLOCKING olduğundan bu satıra geliyoruz
    // Ekrana asddd bastırıldıktan sonra renkler değişmeye başlıyor
console.log('asdd');


// -------------------------------------
/* Burdaki örnekte, return kullanmadığımız zaman chainingi bozmuş oluyoruz
 Aslında fonksiyonlar çalışmaya devam ediyor, orada bir sorun yok fakat
Bizim istediğimiz desired output arka plan renginin 1 saniye aralıklarla
değişmesiydi, yani birden değişmesini istemiyoruz, bunun callback hell kullanarak
yapmıştık bir önceki örnekte, her setTimeour fonksiyonunun içine yazmıştık diğer
setTimeout focksiyonunu ve bu sayede 1 sanite geçtikten sonra diğeri çaprılıyordu
ve bekleme oluyordu. Fakat Burda return olmadığında, biz ilk promise objesi oluştuktan
sonra, ekran sarı olduktan sonra, bu aynı objec üzerinden, yani resolved edilmiş fulfilled
olmuş olan Promise objesi üzerinden then() çağırıyoruz, burdada bizim objemiz pending
olmadığı için çünkü zaten resolved olduğu için then() metodu bir önceki yani üzerinde
çalıştığımız bizim ilk Promise objesi zaten resolved olduğu için herhangi bir beklemeye
girmiyor(Bunun aslen ayrıntılı sebebi de Promise işleri MicroQueue'ya alınıyor ve Settimeout
fonksiyonundan daha önce işlem görüp çalıştırılıyor, bunun burda çok bir önemi yok lakin, settimout
zaten bizim promise objemizin içinde bulunuyor fakat then() callerı çağırılırken sürekli beklemeden iniyor
aşağıya çünkü obje resolved durumda ve bu settimeouttan daha öncelikli), 
bekleme yapmıyor yani, bekleme yapması için yeni bir Promise objesi
olmalıydı yani önce pending olması sonra resolved olan bir obje olsaydı bekleyecekti,
fakat burda bekleme olmuyor çünkü burdaki tüm then() metodlarını aynı resolved obje
üzerinden çaığırıyoruz bu sebeple ilk sarı oluyor sonra çok hızlı bir şekilde diğer
renklere bürünüyor ki biz bunu göremiyoruz çünkü then() ler daha doğrusu setTimeoutlar
birbirini beklemiyorlar ardı sıra async olarak çalışıyorlar ve hızlıca event queue'ya girip
girip çıkıyorlar, hepsi çok hızlı gerçekleştiği için biz sadece ilk Sarı rengi ve en son 
light green olan rengi görüyoruz. Bu sebeple return eklersek then()'lerin içine
he r bir sonraki then bir öncekinden yeni bir promise objesi alacağı ve bu promise
objesi önce resolved olana kadar pending olacağı için ve then() bunu bekleyeceği için
, çünkü böyle tasarlanmış, renklerin saniyeli aralıklarla olangeçişini görebiliriz.
// Aşağıdaki Tüm Kodlar Aynı İşlevi Görüyor! Geçişleri göremiyoruz!

// const colorRequest = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     });
// }

// let colorPromise = colorRequest('yellow', 500)
    
// let cp2 = colorPromise.then(() => {
        
//         colorRequest('green', 3000)
//     })

// let cp3 = colorPromise.then(() => {
//         colorRequest('red', 5500)
//     })


// -----------------------
/* BUrdaki örnekte, return kullanmadığımız zaman chainingi bozmuş oluyoruz
 Aslında fonksionlar çalışmaya devam ediyor, orada bir sorun yok fakat
Bizim istediğimiz desired output arka plan renginin 1 saniye aralıklarla
değişmesiydi, yani birden değişmesini istemiyoruz, bunun callback hell kullanarak
yapmıştık bir önceki örnekte, her setTimeour fonksiyonunun içine yazmıştık diğer
setTimeout focksiyonunu ve bu sayede 1 sanite geçtikten sonra diğeri çaprılıyordu
ve bekleme oluyordu. Fakat Burda return olmadığında, biz ilk promise objesi oluştuktan
sonra, ekran sarı olduktan sonra, bu aynı objec üzerinden, yani resolved edilmiş fulfilled
olmuş olan Promise objesi üzerinden then() çağırıyoruz, burdada bizim objemiz pending
olmadığı için çünkü zaten resolved olduğu için then() metodu bir önceki yani üzerinde
çalıştığımız bizim ilk Promise objesi zaten resolved olduğu için herhangi bir beklemeye
girmiyor, bekleme yapmıyor yani, bekleme yapması için yeni bir Promise objesi
olmalıydı yani önce pending olması sonra resolved olan bir obje olsaydı bekleyecekti,
fakat burda bekleme olmuyor çünkü burdaki tüm then() metodlarını aynı resolved obje
üzerinden çaığırıyoruz bu sebeple ilk sarı oluyor sonra çok hızlı bir şekilde diğer
renklere bürünüyor ki biz bunu göremiyoruz çünkü then() ler daha doğrusu setTimeoutlar
birbirini beklemiyorlar ardı sıra async olarak çalışıyorlar ve hızlıca event queue'ya girip
girip çıkıyorlar, hepsi çok hızlı gerçekleştiği için biz sadece ilk Sarı rengi ve en son 
light green olan rengi görüyoruz. Bu sebeple return eklersek then()'lerin içine
he r bir sonraki then bir öncekinden yeni bir promise objesi alacağı ve bu promise
objesi önce resolved olana kadar pending olacağı için ve then() bunu bekleyeceği için
, çünkü böyle tasarlanmış, renklerin saniyeli aralıklarla olangeçişini görebiliriz.

 */

    // .then(() => {
    //     colorRequest('green')
    // })
    // .then(() => {
    //     colorRequest('lightblue')
    // })
    // .then(() => {
    //     colorRequest('purple')
    // })
    // .then(() => {
    //     colorRequest('pink')
    // })
    // .then(() => {
    //     colorRequest('red')
    // })
    // .then(() => {
    //     colorRequest('orange')
    // })
    // .then(() => {
    //     colorRequest('cyan')
    // })
    // .then(() => {
    //     colorRequest('gray')
    // })
    // .then(() => {
    //     colorRequest('lightgreen')
    // })
    // .catch(() => {})