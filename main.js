// main.js
// وظائف: توليد منتجات (كمثال)، بحث، فلترة فئة، مفضلة، عربة، حفظ في localStorage، مودال عرض

document.addEventListener('DOMContentLoaded', () => {
  // بيانات منتجات مثال — عوّض أو استبدل بالبيانات الحقيقية أو جلبها من API
  const products = [ 
    { id: 'p1', title: 'ViewSonic VA2432 100Hz - New - From Egycomputers', category: 'screen', price: 4.199, img: 'screen.png', desc: 'جديده ضمان 3 سننين IPS 100Hz Monitor With Frameless Design , HDMI,VGA / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/viewsonic-va2432-h-24-1080p-1ms-mprt-ips-100hz-monitor-with-frameless-design/ref/4/' },

    { id: 'p2', title: 'Gigabyte B450 Gaming - New - From Egycomputers', category: 'pc', price: 2.649, img: 'b450 game.png', desc: 'جديده تراي ضمان سنه استبدال معاها كل مشتملاتها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/gigabyte-b450m-gaming-socket-am4-b450-ddr4-s-ata-600-micro-atx-new-tray/ref/4/' },
    { id: 'p3', title: 'Gigabyte B450 S2h - New - From Egycomputers', category: 'pc', price: 2.649, img: 'b450 s2h.png', desc: 'جديده تراي ضمان سنه استبدال معاها كل مشتملاتها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/motherboard-gigabyte-amd-b450m-s2h-new-tray-1-yr-warranty/ref/4/' },
    { id: 'p4', title: 'Asuse B365  - New - From Egycomputers', category: 'pc', price: 1.925, img: 'b365.jpg', desc: 'جديده تراي ضمان سنه استبدال معاها كل مشتملاتها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/asus-ex-b365m-v-motherboard/ref/4/' },
    
    { id: 'p5', title: 'Ryzen 5 2600x - New - From Egycomputers', category: 'pc', price: 2.099, img: 'r5.png', desc: 'جديد تراي ضمان سنه استبدال ولكن بدون كولر مع الاسف / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/cpu-amd-ryzen-5-2600x-6-core-3-6-ghz-4-2-ghz-max-boost-socket-am4-95w-tray/ref/4/' },
    { id: 'p6', title: 'Ryzen 5 3600 -  New - From Egycomputers', category: 'pc', price: 3.099, img: 'r5.png', desc: 'جديد تراي ضمان سنه استبدال ولكن بدون كولر مع الاسف / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/cpu-amd-ryzen-5-3600-cpu-processor-3-6-ghz-six-core-twelve-thread-100-000000031-65w-socket-am4/ref/4/' },
    { id: 'p7', title: 'Ryzen 5 5500 - New - From Egycomputers', category: 'pc', price: 3.599, img: 'r5.png', desc: 'جديد تراي ضمان سنه استبدال بدون كولر مع الاسف/ ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/amd-ryzen-5-5500-processor/ref/4/' },
    { id: 'p8', title: 'Ryzen 5 5600x - New - From Egycomputers', category: 'pc', price: 4.999, img: 'r5.png', desc: 'جديد تراي ضمان سنه استبدال بدون كولر مع الاسف/ ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/amd-ryzen-5-5600x-6-core-3-7-ghz-socket-am4-65w/ref/4/' },
    
    
    
    { id: 'p9', title: 'Intel Core i3 10105f - New - From Egycomputers', category: 'pc', price: 2.749, img: 'i3 10.png', desc: 'جديد تراي ضمان سنه استبدال بدون كولر مع الاسف / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/cpu-intel-core-i3-10105f-4-core-8-threads-3-7-ghz-4-4-ghz-turbo-socket-lga-1200-tray/ref/4/' },
    { id: 'p10', title: 'Intel Core i5 12400f - New - From Egycomputers', category: 'pc', price: 5.699, img: 'i5.png', desc: 'جديد تراي ضمان سنه استبدال ولكن بدون كولر مع الاسف / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/intel-socket-1700-core-i5-12400f-tray-65w-gen12/ref/4/' },
    { id: 'p11', title: 'Intel Core i5 13400f - New - From Egycomputers', category: 'pc', price: 6.275, img: 'i5.png', desc: 'جديد تراي ضمان سنه استبدال ولكن بدون كولر مع الاسف / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/ntel-core-i5-13400f-10-core-16-threads-processor-max-boost-4-60-ghz/ref/4/' },
    { id: 'p12', title: 'Intel Core i5 11400f - New - From Egycomputers', category: 'pc', price: 4.149, img: 'i5.png', desc: 'جديد تراي ضمان سنه استبدال ولكن بدون كولر مع الاسف / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/intel-core-i5-11400f-desktop-processor-6-cores-up-to-4-4-ghz-lga1200/ref/4/' },
    { id: 'p13', title: 'Intel Core i5 9400f - New - From Egycomputers', category: 'pc', price: 2.649, img: '9400.png', desc: 'جديد تراي ضمان سنه استبدال ولكن بدون كولر مع الاسف / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/intel-core-i5-9400f-desktop-processor-6-cores-4-1-ghz-turbo/ref/4/' },
    { id: 'p14', title: 'Intel Core i3 12100f- New - From Egycomputers', category: 'pc', price: 2.949, img: 'i3 10.png', desc: 'جديد تراي ضمان سنه استبدال ولكن بدون كولر مع الاسف / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/intel-core-i3-12100f-12th-generation-desktop-processor-base-clock-3-3ghz-4-cores-lga1700/ref/4/' },
    { id: 'p15', title: 'Cooler Master Z50 Air Cooler - New - From Egycomputers', category: 'pc', price: 299, img: 'z50.png', desc: 'جديد مع العلبه/ ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/cooler-master-z50-cpu-heatsink-fan/ref/4/' },
    { id: 'p16', title: 'Xigmatek Epix II Air - New - From Egycomputers', category: 'pc', price: 849, img: 'cooler1.png', desc: 'جديد مع العلبه/ ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/xigmatek-epix-ii-air-cpu-cooler/ref/4/' },
    


    { id: 'p17', title: 'RTX 2060 - Used - From Egycomputers', category: 'pc', price: 8.599, img: 'rtx 2060.png', desc: 'احسن كارت في سعره / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/gigabyte-geforce-rtx-2060-oc/ref/4/' },
    { id: 'p18', title: 'RX 6600XT - Used - From Egycomputers', category: 'pc', price: 10.499, img: 'RX 6600XT.png', desc: 'احسن كارت في سعره / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/msi-gaming-amd-radeon-rx-6600-xt-128-bit-8gb-gddr6-dp-hdmi-dual-torx-fans-freesync-directx-12-vr-ready-oc-graphics-card/ref/4/' },
    { id: 'p19', title: 'RTX 5060 Single fan - New - From Egycomputers', category: 'pc', price: 16.849, img: '5060 1.png', desc: 'احسن كارت في سعره / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/zotac-gaming-geforce-rtx-5060-8g-gddr7-solo-graphics-card-3-years-warranty/ref/4/' },
    { id: 'p20', title: 'RTX 3060 12gb Classic - Used - From Egycomputers', category: 'pc', price: 12.299, img: 'classic 3060.png', desc: 'احسن كارت في سعره / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/leadtek-winfast-rtx-3060-12gb/ref/4/' },
    { id: 'p21', title: 'RTX 3060TI 8gb - Used - From Egycomputers', category: 'pc', price: 14.499, img: '3060ti.jpg', desc: 'مستعمل بحاله ممتازه مع ضمان ممتاز / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/gigabyte-rtx-3060ti-gaming-oc-8gb-gddr6/ref/4/' },
    
    


    { id: 'p22', title: 'RTX 3060 - Used - From Egycomputers', category: 'pc', price: 13.199, img: '3060.png', desc: 'احسن كارت للمونتاج والجرافيك / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/rtx-3060-12gb-oc-msi-ventus-2x/ref/4/' },
    { id: 'p23', title: 'RTX 5060 tripple fan - New - From Egycomputers', category: 'pc', price: 19.799, img: 'asus1.png', desc: 'كارت شاشه حديث GDDR7 / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:"https://egycomputers.com/product/asus-geforce-rtx-5060-prime-8gb-gddr7-oc-edition-graphic-card-new-3-years-local-warranty/ref/4/" },
    { id: 'p24', title: 'RTX 2060 Super - Used - From Egycomputers', category: 'pc', price: 9.699, img: '2060 su.jpg', desc: 'احسن كارت في سعره / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/gigabyte-geforce-rtx-2060-super-gaming-oc-8g/ref/4/' },
    { id: 'p25', title: 'GTX 750ti - Used - From Egycomputers', category: 'pc', price: 2.299, img: 'gtx 750.jpg', desc: 'مستعمل بحاله ممتازه مع ضمان هايل / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/zotac-geforce-gtx-750-ti-2gb-oc/ref/4/' },
    { id: 'p26', title: 'RX 580 8GB - Used - From Egycomputers', category: 'pc', price: 3.899, img: 'rx 580.png', desc: 'مستعمل بحاله ممتازه مع ضمان هايل متقلقش مفيش تعدين هنا / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/xfx-rx-580-8gb/ref/4/' },
    { id: 'p27', title: 'RX 590 8GB - Used - From Egycomputers', category: 'pc', price: 4.199, img: 'rx 590.png', desc: 'مستعمل بحاله ممتازه مع ضمان هايل متقلقش مفيش تعدين هنا / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/xfx-rx-590-8gb/ref/4/' },
    { id: 'p28', title: 'RX 5600XT - Used - From Egycomputers', category: 'pc', price: 7.299, img: 'rc 5600xt.jpg', desc: 'افضل كارت للالعاب في سعره مع ضمان هايل / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'' },
    { id: 'p29', title: ' تجميعه بكارت RTX 3060 , i5 13400f جديده بالكامل ميعاده الرمات والكارت وضمان استبدال لاي قطعه - From Egycomputers', category: 'complete', price: 28.999, img: 'case .png', desc: 'تجميعة بRTX 3060 12جيجا مع i5 13400f ورمات 2x8 3200 و ssd nvme m.2 256g و كيس وباور من زيجماتك 750 و H610m و hdd 500g  التجميعه معاها ويندوز مجاني ولعبه بتختارها مجانيه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/intel-i5-13400f-gaming-build/ref/4/' },
    { id: 'p30', title: 'تجميعة ryzen 5 3600 , b450 , rx 580 8gb متقلقش مفيش تعدين هنا كل حاجه مع ضمان استبدال - From Egycomputers', category: 'complete', price: 12.054, img: 'case .png', desc: 'احسن تجميعه ممكن تشريها بالسعر ده في العالم ryzen 5 3600 و rx 580 8gb , ssd nvme m.2 256 , B450 s2h او نسخة الgaming  / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/ryzen-5-3600-gaming-build/ref/4/' },
    { id: 'p31', title: 'تجميعه بكارت RTX 3060 , i5 12400f جديده بالكامل ميعاده الرمات والكارت وضمان استبدال لاي قطعه - From Egycomputers', category: 'complete', price: 27.674, img: 'case .png', desc: 'تجميعة بRTX 3060 12جيجا مع i5 12400f ورمات 2x8 3200 و ssd nvme m.2 256g و كيس وباور من زيجماتك 750 و H610m و hdd 500g  التجميعه معاها ويندوز مجاني ولعبه بتختارها مجانيه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/intel-i5-12400f-gaming-build/ref/4/' },
    { id: 'p32', title: 'HESTART GAMING CASE 4 FAN ARGB – MESH cooling - New - From Egycomputers', category: 'pc', price: 2.099, img: 'case.png', desc: 'بدون باور صبلاي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/hestart-gaming-case-4-fan-argb-mesh-cooling/ref/4/' },
    { id: 'p33', title: 'Xigmatek Hero II Air ARGB + X-Power 600W 80+ White - New - From Egycomputers', category: 'pc', price: 2.999, img: 'hero2.png', desc: ' باور صبلاي 600 واط 80+ white  / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/xigmatek-hero-ii-air-argb-x-power-600w-80/ref/4/' },
    { id: 'p34', title: 'Xigmatek Hero II Air ARGB + X-Power 750W 80+ White - New - From Egycomputers', category: 'pc', price: 3.399, img: 'hero2.png', desc: ' باور صبلاي 750 واط 80+ white  / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/xigmatek-hero-ii-air-argb-x-power-750w-80-white-mid-tower-case/ref/4/' },
    { id: 'p35', title: 'Xigmatek Sky II Wave FRGB + Litepower II i550 450W 80+ Bronze Mid Tower Case - New - From Egycomputers', category: 'pc', price: 2.299, img: 'xig3.png', desc: 'كيس مع باور 450 واط 80+ Bronze / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/xigmatek-sky-ii-wave-frgb-litepower-ii-i550-450w-mid-tower-case/ref/4/' },

    
    
    
    
    
    
    { id: 'p36', title: 'Samsung NVME M.2 256GB - Used - From Egycomputers', category: 'ssd', price: 925, img: 'ssd256.png', desc: 'مستعمل بحاله ممتازه وهيلث ممتاز / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/samsung-pm981-256gb-nvme-pcie-m-2-ssd-original-used/ref/4/' },
    { id: 'p37', title: 'WD HDD 500GB - Used - From Egycomputers', category: 'hdd', price: 375, img: 'hdd500.png', desc: 'هارد 500 ب هيلث ممتاز / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/wd-hard-disk-western-digital-500-gb/ref/4/' },
    { id: 'p38', title: '8x1 TeamGroup ARGB Ram DDR4 3000MHz - Used - From Egycomputers', category: 'pc', price: 750, img: 'ram rgp.png', desc: 'ضمان سنه استبدال / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/teamgroup-team-t-force-delta-rgb-ddr4-gaming-memory-8-gb-3000-mhz/ref/4/' },
    { id: 'p39', title: '8x1 Cursair Ram DDR4 3200MHz - Used - From Egycomputers', category: 'pc', price: 750, img: 'ram cursiar.png', desc: 'ضمان سنه استبدال / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/corsair-vengeance-8gb-ddr4-2133mhz/ref/4/' },
    { id: 'p40', title: '8x1 Samsung Ram DDR4 3200MHz - Used - From Egycomputers', category: 'pc', price: 725, img: 'ram gr 3200.png', desc: 'ضمان سنه استبدال  / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/samsung-8gb-ddr4-3200-mhz-pc4-25600-dimm-desktop-memory-ram/ref/4/' },
    { id: 'p41', title: '8x1 Crucial RAM DDR4 2666 MHz - Used - From Egycomputers', category: 'pc', price: 699, img: '1111.webp', desc: 'ضمان سنه استبدال  / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/crucial-ram-8gb-ddr4-2666-mhz-cl19-desktop-memory-ct8g4dfra266/ref/4/' },
    
    
    
    
    
    
    { id: 'p42', title: 'B450 ASUS Prime - New - From Egycomputers', category: 'pc', price: 3.399, img: 'b450 as.png', desc: 'جديده تراي ضمان سنه معاها كل مشتملاتها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/asus-prime-b450m-kii-am4-micro-atx-motherboard/ref/4/' },
    { id: 'p43', title: 'B660 ASUS Prime - New - From Egycomputers', category: 'pc', price: 4.399, img: 'b660a.png', desc: 'جديده تراي ضمان سنه معاها كل مشتملانها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/asus-prime-b660m-k-d4-new-tray/ref/4/' },
    { id: 'p44', title: 'B760 ASUS Prime - New - From Egycomputers', category: 'pc', price: 5.649, img: 'b760.png', desc: 'جديده تراي ضمان سنه معاها كل مشتملاتها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/asus-prime-b760m-a-d4-csm-motherboard/ref/4/' },
    { id: 'p45', title: 'B365 Gigabyte - New - From Egycomputers', category: 'pc', price: 1.899, img: 'b365g.png', desc: 'جديده تراي ضمان سنه معاها كل مشتملاتها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/gigabyte-b365-motherboard/ref/4/' },
    { id: 'p46', title: 'Gigabyte B550 Eagle Am4 Gaming - New - From Egycomputers', category: 'pc', price: 5.599, img: 'b550.png', desc: 'جديده تراي ضمان سنه معاها كل مشتملاتها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/gigabyte-b550-eagle-am4-gaming-motherboard/ref/4/' },
    { id: 'p47', title: 'GIGABYTE B560M - New - From Egycomputers', category: 'pc', price: 2.725, img: 'b560g.jpg', desc: 'جديده ضمان سنه بكل مشتملاتها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/asus-ex-b560m-v5-intel-lga1200-for-11th-10th-gen-intel-core-and-celeron-matx-motherboard-with-pcie-4-0-new-tray/ref/4/' },
    { id: 'p48', title: 'GIGABYTE H510M S2H - New - From Egycomputers', category: 'pc', price: 2.999, img: 'h510ms.jpg', desc: 'جديده تراي ضمان سنه بكل مشتملاتها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/gigabyte-h510m-s2h-lga-1200-intel-h510-micro-atx-pcie-4-0-usb-3-2-gen1-gaming-gbe-lan-motherboard/ref/4/' },
    { id: 'p49', title: 'GIGABYTE H610M - New - From Egycomputers', category: 'pc', price: 3.699, img: 'h610m.png', desc: 'جديده تراي ضمان سنه بكل مشتملاتها  / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/gigabyte-h610m-k-ddr4-motherboard/ref/4/' },
    { id: 'p50', title: 'MSI B450M-A PRO MAX II - New - From Egycomputers', category: 'pc', price: 3.199, img: 'b450msi.png', desc: 'جديده تراي ضمان سنه بكل مشتملاتها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/msi-b450m-a-pro-max-ii-proseries-motherboard-matx-supports-amd-5000-4000-3000-2000-1000-series-am4-processors-m-2-sata-6g-usb-3-2-gen-1-ddr4/ref/4/' },
    { id: 'p51', title: 'ONIKUMA G55  - New - From Egycomputers', category: 'key', price: 725, img: 'oni.png', desc: 'احسن كيبورد 60% في سعره وبراوين سويتش ومعاه زراير وتقدر تغيرله السويتشات / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/onikuma-g55-mechanical-gaming-keyboard-61-keys-rgb-layout-wired-led-backlit-for-pc-and-laptop/ref/4/' },
    { id: 'p52', title: 'ONIKUMA G52  - New - From Egycomputers', category: 'key', price: 925, img: 'oni52.png', desc: 'احسن كيبورد 70% في سعره وبلو سويتش ومعاه زراير وتقدر تغيرله السويتشات / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/onikuma-g52-gaming-keyboard/ref/4/' },
    { id: 'p53', title: 'Onikuma CW917 - New - From Egycomputers', category: 'key', price: 325, img: 'mous.webp', desc: 'ماوس ARGB 3600 DPI / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/onikuma-cw917-gaming-mouse/ref/4/' },
    { id: 'p54', title: 'ONIKUMA CW905 - New - From Egycomputers', category: 'key', price: 425, img: 'mous1.png', desc: 'ماوس ARGB 7200 DPI / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/onikuma-cw905-6400-dpi-wired-gaming-mouse-with-breathing-led-colors/ref/4/' },
    { id: 'p55', title: 'Onikuma X25  White - New - From Egycomputers', category: 'key', price: 699, img: 'x25w.jpg', desc: 'هيد فون بالون الابيض ARGB من كل حته فيها / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/onikuma-x25-gradient-dynamic-light-headset-computer-gaming-headset-for-ps4-ps5-xone-xseries-nswitch-pc-grey/ref/4/' },
    { id: 'p56', title: 'Onikuma X25 Black - New - From Egycomputers', category: 'key', price: 649, img: 'x25.webp', desc: 'هيد فون بالون الاسود ARGB من كل حتي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/onikuma-x25-gaming-headset/ref/4/' },
    { id: 'p57', title: 'ONIKUMA K8 - New - From Egycomputers', category: 'key', price: 675, img: 'k8.jpg', desc: 'هيد فون جيمنح / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/onikuma-k8-rgb-gaming-headphone-over-ear-headset-with-microphone-volume-control-headphones-rgb-led-lights/ref/4/' },
    { id: 'p58', title: 'ONIKUMA X31 - New - From Egycomputers', category: 'key', price: 599, img: 'x31.png', desc: 'هيد فون جيمنح / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/onikuma-x31-gaming-headset-black/ref/4/' },

   











   { id: 'p59', title: ' Windows 11 Pro Original (Not Activated) - Gift From Egycomputers', category: 'games', price: 0, img: 'win11.jpg', desc: 'هديه من شركة ايجي كمبيوترز مع اي تجميعه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/windows-11-pro-not-activated/ref/4/' },
   { id: 'p60', title: ' EA SPORTS FC 25 (PC) - Gift From Egycomputers', category: 'games', price: 0, img: 'fc.jpg', desc: 'هديه من شركة ايجي كمبيوترز مع اي تجميعه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/ea-sports-fc-25-pc-steam-account-مجانية-مع-أي-تجميعه-كاملة/ref/4/' },
   { id: 'p61', title: ' Age of Empires IV: Anniversary Edition (PC) - Gift From Egycomputers', category: 'games', price: 0, img: 'gift1.png', desc: 'هديه من شركة ايجي كمبيوترز مع اي تجميعه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/age-of-empires-iv-anniversary-edition-pc-steam-account-مجانية-مع-أي-تجميعه-كاملة/ref/4/' },
   { id: 'p62', title: ' Battlefield 2042 (PC) - Gift From Egycomputers', category: 'games', price: 0, img: 'gift2.png', desc: 'هديه من شركة ايجي كمبيوترز مع اي تجميعه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/battlefield-2042-pc-steam-account-مجانية-مع-أي-تجميعه-كاملة/ref/4/' },
   { id: 'p63', title: ' Battlefield V | Definitive Edition (PC)  - Gift From Egycomputers', category: 'games', price: 0, img: 'gift3.jpg', desc: 'هديه من شركة ايجي كمبيوترز مع اي تجميعه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/battlefield-v-definitive-edition-pc-steam-account-مجانية-مع-أي-تجميعه-كاملة/ref/4/' },
   { id: 'p64', title: 'Game pass For PC 1 Month - Gift From Egycomputers', category: 'games', price: 0, img: 'xbox.jpg', desc: 'هديه من شركة ايجي كمبيوترز مع اي تجميعه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/game-pass-for-pc-1-month-trial/ref/4/' },
   { id: 'p65', title: 'Hell Let Loose - Gift From Egycomputers', category: 'games', price: 0, img: 'let.jpg', desc: 'هديه من شركة ايجي كمبيوترز مع اي تجميعه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/game-pass-for-pc-1-month-trial/ref/4/' },
   { id: 'p66', title: 'Grand Theft Auto V Enhanced Edition Steam Account – Fresh New Account - Gift From Egycomputers', category: 'games', price: 325, img: 'gtae.jpg', desc: 'هديه من شركة ايجي كمبيوترز مع اي تجميعه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/grand-theft-auto-v-enhanced-edition-global-rockstar/ref/4/' },
   { id: 'p67', title: 'Tom Clancy’s The Division 2 - Gift From Egycomputers', category: 'games', price: 0, img: 'gift4.jpg', desc: 'هديه من شركة ايجي كمبيوترز مع اي تجميعه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/tom-clancys-the-division-2-standard-edition-pc-ubisoft-connect-account-مجانية-مع-أي-تجميعه-كام/ref/4/' },


    
    { id: 'p68', title: 'GTA V - From Angry Store', category: 'games', price: 625, img: 'gta 25.jpg', desc: 'لعبة عالم مفتوح اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1AF4stmP8K/' },
    { id: 'p69', title: 'Red dead redemption 2 - From Angry Store', category: 'games', price: 599, img: 'rdd2.jpg', desc: 'لعبة عالم مفتوح اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p70', title: 'FC 25 - From Angry Store', category: 'games', price: 210, img: 'fifa 25.jpg', desc: 'لعبة كرة قدم اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p71', title: 'Spider Man 2 - From Angry Store', category: 'games', price: 189, img: 'spider2.jpg', desc: ' / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1EWVxuGLqm/' },
    { id: 'p72', title: 'Uncharted - From Angry Store', category: 'games', price: 499, img: 'unca.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p73', title: 'Detriot - From Angry Store', category: 'games', price: 379, img: 'de.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p74', title: 'Battelefield 2024 - From Angry Store', category: 'games', price: 210, img: 'battel.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p75', title: 'Rematch - From Angry Store', category: 'games', price: 829, img: 'rematch.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p76', title: 'Forza Horizone 4 - From Angry Store', category: 'games', price: 239, img: 'forza.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p77', title: 'Euro Truck Simulator 2 - From Angry Store', category: 'games', price: 0, img: 'euro.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/17KifPovTB/' },
    { id: 'p78', title: 'Windows 11 OEM - From Angry Store', category: 'games', price: 50, img: 'win11 oem.jpg', desc: 'نسخه اصليه مفعله / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1BJuKQSPaE/' },
    
    
    
    
    
    
    
    

    
    
    
    // أضف منتجات أكثر حسب الحاجة...
  ];

  // عناصر DOM
  const productsSection = document.getElementById('productsSection');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const categorySelect = document.getElementById('categorySelect');
  const favCountEl = document.querySelector('.count_favourite');
  const cartCountEl = document.querySelector('.count_items_header');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const yearEl = document.getElementById('year');
  const hamburger = document.querySelector('.hamburger');
  const iconCart = document.querySelector('.icon-cart');
  const iconFav = document.querySelector('.icon-fav');

  // مودال
  const productModal = document.getElementById('productModal');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');

  // LocalStorage keys
  const KEY_FAV = 'ah_favorites_v1';
  const KEY_CART = 'ah_cart_v1';

  // تحميل الحالة من التخزين
  let favorites = JSON.parse(localStorage.getItem(KEY_FAV) || '[]'); // array of ids
  let cart = JSON.parse(localStorage.getItem(KEY_CART) || '[]'); // array of {id, qty}

  // تعيين سنة الفوتر
  yearEl.textContent = new Date().getFullYear();

  // تحديث العدادين
  function updateCounters(){
    favCountEl.textContent = favorites.length;
    const totalQty = cart.reduce((s,i)=>s + (i.qty||1),0);
    cartCountEl.textContent = totalQty;
  }

  // حفظ
  function saveState(){
    localStorage.setItem(KEY_FAV, JSON.stringify(favorites));
    localStorage.setItem(KEY_CART, JSON.stringify(cart));
    updateCounters();
  }

  // توليد كروت المنتجات
  function renderProducts(list){
    productsSection.innerHTML = '';
    if(list.length === 0){
      productsSection.innerHTML = `<p style="color:#fff">لا توجد منتجات مطابقة.</p>`;
      return;
    }
    list.forEach(p => {
      const card = document.createElement('article');
      card.className = 'product_card';
      card.innerHTML = `
        <div class="product_img">
          <img loading="lazy" src="${p.img}" alt="${p.title}">
        </div>
        <div class="product_meta">
          <div class="product_title">${p.title}</div>
          <div class="product_price">${p.price.toLocaleString()} ج.م</div>
          <div class="product_desc" style="color:var(--muted);font-size:14px">${p.desc}</div>
        </div>
        <div class="product_actions">
          <button class="btn btn_view" data-id="${p.id}">عرض</button>
          <button class="btn btn_add" data-id="${p.id}"><i class="fa-solid fa-cart-plus"></i> أضف للعربة</button>
          <button class="btn btn_fav" data-id="${p.id}" title="إضافة للمفضلة"><i class="${favorites.includes(p.id)?'fa-solid':'fa-regular'} fa-heart"></i></button>
        </div>
      `;
      productsSection.appendChild(card);
    });
  }

  // البحث والفلترة
  function filterAndRender(){
    const q = searchInput.value.trim().toLowerCase();
    const cat = categorySelect.value;
    let list = products.filter(p => {
      const matchesQ = p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      const matchesCat = (cat === 'all') || (p.category === cat);
      return matchesQ && matchesCat;
    });
    renderProducts(list);
  }

  // أحداث البحث
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    filterAndRender();
  });
  searchInput.addEventListener('input', () => filterAndRender());
  categorySelect.addEventListener('change', () => filterAndRender());

  // الاستماع لنقرات داخل قسم المنتجات (delegation)
  productsSection.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('.btn_view');
    const addBtn = e.target.closest('.btn_add');
    const favBtn = e.target.closest('.btn_fav');

    if(viewBtn){
      const id = viewBtn.dataset.id;
      openProductModal(id);
    } else if(addBtn){
      const id = addBtn.dataset.id;
      addToCart(id);
    } else if(favBtn){
      const id = favBtn.dataset.id;
      toggleFavorite(id, favBtn);
    }
  });

  // فتح مودال المنتج
  function openProductModal(id){
    const p = products.find(x=>x.id===id);
    if(!p) return;
    modalBody.innerHTML = `
      <div style="display:flex;gap:16px;flex-wrap:wrap">
        <img src="${p.img}" alt="${p.title}">
        <div style="flex:1;min-width:220px">
          <h2 style="margin:0 0 8px">${p.title}</h2>
          <p style="margin:0 0 12px;color:var(--muted)">${p.desc}</p>
          <p style="font-weight:800;color:var(--accent);margin-bottom:10px">${p.price.toLocaleString()} ج.م</p>
          <div style="display:flex;gap:8px">
            <button class="btn btn_add" data-id="${p.id}"><i class="fa-solid fa-cart-plus"></i> أضف للعربة</button>
            <a class="btn btn_view" href="${p.buyLink}" target="_blank">شراء من المصدر</a>
          </div>
        </div>
      </div>
    `;
    productModal.classList.remove('hidden');
  }

  closeModal && (closeModal.onclick = () => productModal.classList.add('hidden'));
  productModal.addEventListener('click', (e) => {
    if(e.target === productModal) productModal.classList.add('hidden');
  });

  // إدارة المفضلة
  function toggleFavorite(id, btnEl){
    const idx = favorites.indexOf(id);
    if(idx === -1){
      favorites.push(id);
      if(btnEl) btnEl.querySelector('i').classList.replace('fa-regular','fa-solid');
    } else {
      favorites.splice(idx,1);
      if(btnEl) btnEl.querySelector('i').classList.replace('fa-solid','fa-regular');
    }
    saveState();
  }

  // إضافة للسلة
  function addToCart(id){
    const existing = cart.find(i=>i.id===id);
    if(existing) existing.qty = (existing.qty||1) + 1;
    else cart.push({id, qty:1});
    saveState();
    renderCart();
    // افتح السلايدبار
    cartSidebar.classList.add('open');
  }

  // عرض محتويات العربة
  function renderCart(){
    cartItemsEl.innerHTML = '';
    if(cart.length === 0){
      cartItemsEl.innerHTML = '<p style="color:#fff">السلة فارغة</p>';
      cartTotalEl.textContent = '0';
      return;
    }
    let total = 0;
    cart.forEach(item => {
      const p = products.find(x=>x.id === item.id) || {title:'منتج غير معروف', price:0, img:''};
      const row = document.createElement('div');
      row.className = 'cart_item';
      row.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <div style="flex:1">
          <div style="font-weight:700;color:#fff">${p.title}</div>
          <div style="color:var(--muted);font-size:14px">${p.price.toLocaleString()} ج.م</div>
          <div style="margin-top:6px;display:flex;gap:8px;align-items:center">
            <button class="qty_minus" data-id="${item.id}">-</button>
            <span class="qty_val">${item.qty}</span>
            <button class="qty_plus" data-id="${item.id}">+</button>
            <button class="remove_item" data-id="${item.id}" style="margin-inline-start:auto;background:transparent;border:0;color:#ff4d4d;cursor:pointer">حذف</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
      total += (p.price * (item.qty || 1));
    });
    cartTotalEl.textContent = total.toLocaleString();
  }

  // أحداث داخل العربة (تعديل كمية / حذف)
  cartItemsEl.addEventListener('click', (e) => {
    const plus = e.target.closest('.qty_plus');
    const minus = e.target.closest('.qty_minus');
    const remove = e.target.closest('.remove_item');
    if(plus){
      const id = plus.dataset.id;
      const itm = cart.find(i=>i.id===id);
      if(itm){ itm.qty = (itm.qty||1) + 1; saveState(); renderCart(); }
    } else if(minus){
      const id = minus.dataset.id;
      const itm = cart.find(i=>i.id===id);
      if(itm){ itm.qty = (itm.qty||1) - 1; if(itm.qty <= 0) cart = cart.filter(i=>i.id!==id); saveState(); renderCart();}
    } else if(remove){
      const id = remove.dataset.id;
      cart = cart.filter(i=>i.id!==id);
      saveState(); renderCart();
    }
  });

  // إغلاق وفتح السلايدبار
  document.getElementById('closeCart')?.addEventListener('click', ()=> cartSidebar.classList.remove('open'));
  iconCart.addEventListener('click', (e) => { e.preventDefault(); cartSidebar.classList.toggle('open'); renderCart(); });
  iconFav.addEventListener('click', (e) => { e.preventDefault(); alert('المفضلات: ' + (favorites.length ? favorites.length + ' عناصر' : 'فارغة')); });

  // همبرغر للموبايل (يمكن تعديله ليعرض قائمة جانبية)
  hamburger.addEventListener('click', () => {
    // على سبيل المثال نعرض/نخفي شريط العربة أو نجعل البحث يظهر مكبر
    cartSidebar.classList.toggle('open');
    renderCart();
  });

  // فتح مودال أو إضافة للعربة من داخل المودال (event delegation global)
  document.body.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.btn_add');
    if(addBtn && addBtn.dataset.id){
      addToCart(addBtn.dataset.id);
      // إذا كان المودال مفتوحاً نغلقه
      productModal.classList.add('hidden');
    }
  });

  // رندر أولي
  saveState();
  filterAndRender();
});