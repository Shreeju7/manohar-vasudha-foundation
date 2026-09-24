/* [English, Hindi, Marathi]. If Marathi is missing, it is the same as Hindi.
   To change or add a translation, edit or add a line here. Missing text stays English. */
const D = [
["Home","होम","मुख्यपृष्ठ"],["About","परिचय","आमच्याबद्दल"],["Course","कोर्स"],["Curriculum","पाठ्यक्रम","अभ्यासक्रम"],
["Career Opportunities","करियर के अवसर","करिअरच्या संधी"],["Admission","प्रवेश"],["Contact","संपर्क"],
["Apply Now","अभी आवेदन करें","आता अर्ज करा"],["Apply now","अभी आवेदन करें","आता अर्ज करा"],
["Limited seats: only 25 students per batch. Enroll now!","सीमित सीटें: प्रति बैच केवल 25 विद्यार्थी। अभी प्रवेश लें!","मर्यादित जागा: प्रत्येक बॅचमध्ये फक्त 25 विद्यार्थी. आताच प्रवेश घ्या!"],
["Hurry!","जल्दी करें!","घाई करा!"],["Enroll","प्रवेश लें","प्रवेश घ्या"],["Now","अभी","आता"],
["Through Manohar Vasudha Foundation","मनोहर वसुधा फाउंडेशन के माध्यम से","मनोहर वसुधा फाउंडेशनद्वारे"],
["Naturopathy & Yoga","प्राकृतिक चिकित्सा और योग","निसर्गोपचार आणि योग"],
["C.C. in Yoga & Naturopathy","योग एवं प्राकृतिक चिकित्सा में C.C.","योग व निसर्गोपचारमध्ये C.C."],
["A professional course combining naturopathy, yoga therapy, diet, practical training and wellness education.","प्राकृतिक चिकित्सा, योग थेरेपी, आहार, प्रैक्टिकल प्रशिक्षण और वेलनेस शिक्षा को जोड़ने वाला एक व्यावसायिक कोर्स।","निसर्गोपचार, योग थेरपी, आहार, प्रात्यक्षिक प्रशिक्षण आणि आरोग्य शिक्षण यांचा मेळ घालणारा व्यावसायिक कोर्स."],
["1 Year Course","1 वर्ष का कोर्स","1 वर्षाचा कोर्स"],["Part-Time","पार्ट-टाइम","अर्धवेळ"],["Course Code: 201208","कोर्स कोड: 201208"],
["Theory + Practical Training","थ्योरी + प्रैक्टिकल प्रशिक्षण","थिअरी + प्रात्यक्षिक प्रशिक्षण"],
["Apply for Admission","प्रवेश के लिए आवेदन करें","प्रवेशासाठी अर्ज करा"],["Explore Course","कोर्स देखें","कोर्स पहा"],
["A Path to a Healthy Life","स्वस्थ जीवन की ओर एक राह","निरोगी जीवनाकडे जाणारा मार्ग"],
["Manohar Vasudha Foundation focuses on naturopathy, yoga and healthy living, helping students learn practical ways to support a healthy body, mind and lifestyle.","मनोहर वसुधा फाउंडेशन प्राकृतिक चिकित्सा, योग और स्वस्थ जीवन पर केंद्रित है और विद्यार्थियों को स्वस्थ शरीर, मन और जीवनशैली के व्यावहारिक तरीके सिखाता है।","मनोहर वसुधा फाउंडेशन निसर्गोपचार, योग आणि निरोगी जीवनावर लक्ष केंद्रित करते आणि विद्यार्थ्यांना निरोगी शरीर, मन व जीवनशैलीसाठी उपयुक्त पद्धती शिकवते."],
["Healthy Body","स्वस्थ शरीर","निरोगी शरीर"],["Healthy Mind","स्वस्थ मन","निरोगी मन"],["Healthy Life","स्वस्थ जीवन","निरोगी जीवन"],
["Yoga","योग"],["Naturopathy","प्राकृतिक चिकित्सा","निसर्गोपचार"],["Diet and nutrition","आहार और पोषण","आहार आणि पोषण"],
["Healthy lifestyle","स्वस्थ जीवनशैली","निरोगी जीवनशैली"],["Practical wellness knowledge","व्यावहारिक वेलनेस ज्ञान","व्यावहारिक आरोग्य ज्ञान"],
["Yoga therapy","योग थेरेपी","योग थेरपी"],["Yoga Therapy","योग थेरेपी","योग थेरपी"],
["Objective:","उद्देश्य:","उद्दिष्ट:"],["To create a skilled naturopath & Yoga Therapist.","एक कुशल प्राकृतिक चिकित्सक और योग थेरेपिस्ट तैयार करना।","कुशल निसर्गोपचारतज्ज्ञ आणि योग थेरपिस्ट घडवणे."],
["Course code","कोर्स कोड"],["Duration","अवधि","कालावधी"],["1 Year","1 वर्ष"],["Type","प्रकार"],["Training","प्रशिक्षण"],
["6 days / week","सप्ताह में 6 दिन","आठवड्यात 6 दिवस"],["Daily training","रोज़ का प्रशिक्षण","दैनिक प्रशिक्षण"],["7 hours / day","7 घंटे प्रतिदिन","दररोज 7 तास"],
["Per week","प्रति सप्ताह","दर आठवड्याला"],["6 hrs Theory + 18 hrs Practical = 24 hrs","6 घंटे थ्योरी + 18 घंटे प्रैक्टिकल = 24 घंटे","6 तास थिअरी + 18 तास प्रात्यक्षिक = 24 तास"],
["Batch size","बैच का आकार","बॅचची क्षमता"],["Max. 25 students","अधिकतम 25 विद्यार्थी","कमाल 25 विद्यार्थी"],
["Fees, dates, timings","शुल्क, तिथियां, समय","शुल्क, तारखा, वेळा"],["Contact the institute for details.","विवरण के लिए संस्थान से संपर्क करें।","तपशीलासाठी संस्थेशी संपर्क साधा."],
["What Will You Learn?","आप क्या सीखेंगे?","तुम्ही काय शिकाल?"],["Understanding the human body","मानव शरीर को समझना","मानवी शरीर समजून घेणे"],
["Naturopathy principles","प्राकृतिक चिकित्सा के सिद्धांत","निसर्गोपचाराची तत्त्वे"],["Practical naturopathy","प्रैक्टिकल प्राकृतिक चिकित्सा","प्रात्यक्षिक निसर्गोपचार"],
["Patient case study and examination","रोगी केस स्टडी और परीक्षण","रुग्ण केस स्टडी आणि तपासणी"],
["Three theory papers and three practical papers, as per the course syllabus.","कोर्स सिलेबस के अनुसार तीन थ्योरी और तीन प्रैक्टिकल पेपर।","अभ्यासक्रमानुसार तीन थिअरी आणि तीन प्रात्यक्षिक पेपर."],
["Module 1: Anatomy, Physiology & Pathology","मॉड्यूल 1: शरीर रचना, शरीर क्रिया विज्ञान और रोग विज्ञान","मॉड्यूल 1: शरीररचना, शरीरक्रियाशास्त्र आणि रोगनिदानशास्त्र"],
["Module 2: Naturopathy & Diet","मॉड्यूल 2: प्राकृतिक चिकित्सा और आहार","मॉड्यूल 2: निसर्गोपचार आणि आहार"],
["Practical Training","प्रैक्टिकल प्रशिक्षण","प्रात्यक्षिक प्रशिक्षण"],["Diet & Nutrition","आहार एवं पोषण","आहार व पोषण"],
["Practical Anatomy, Physiology & Pathology","प्रैक्टिकल शरीर रचना, क्रिया विज्ञान और रोग विज्ञान","प्रात्यक्षिक शरीररचना, शरीरक्रिया व रोगनिदान"],
["Practical Naturopathy & Diet","प्रैक्टिकल प्राकृतिक चिकित्सा और आहार","प्रात्यक्षिक निसर्गोपचार आणि आहार"],["Practical Yoga","प्रैक्टिकल योग","प्रात्यक्षिक योग"],
["Human body introduction","मानव शरीर का परिचय","मानवी शरीराचा परिचय"],["Cells, tissues, organs and body regions","कोशिकाएं, ऊतक, अंग और शरीर के क्षेत्र","पेशी, ऊती, अवयव आणि शरीराचे भाग"],
["Musculoskeletal system: bones, joints, muscles","अस्थि-पेशी तंत्र: हड्डियां, जोड़, मांसपेशियां","अस्थी-स्नायू संस्था: हाडे, सांधे, स्नायू"],
["Digestive system, metabolism, carbohydrate, protein and nutrition","पाचन तंत्र, चयापचय, कार्बोहाइड्रेट, प्रोटीन और पोषण","पचनसंस्था, चयापचय, कार्बोहायड्रेट, प्रथिने आणि पोषण"],
["Circulatory system","परिसंचरण तंत्र","रक्ताभिसरण संस्था"],["Respiratory system","श्वसन तंत्र","श्वसन संस्था"],["Endocrine system","अंतःस्रावी तंत्र","अंतःस्रावी संस्था"],
["Nervous system","तंत्रिका तंत्र","चेतासंस्था"],["Excretory system: kidney and skin","उत्सर्जन तंत्र: गुर्दे और त्वचा","उत्सर्जन संस्था: मूत्रपिंड आणि त्वचा"],
["Reproductive system","प्रजनन तंत्र","प्रजनन संस्था"],["Pathology","रोग विज्ञान (पैथोलॉजी)","रोगनिदानशास्त्र (पॅथॉलॉजी)"],
["Laboratory pathology and investigation report reading","प्रयोगशाला पैथोलॉजी और जांच रिपोर्ट पढ़ना","प्रयोगशाळा पॅथॉलॉजी आणि तपासणी अहवाल वाचन"],
["Introduction to bacteriology, virology, fungi and parasitology","बैक्टीरियोलॉजी, वायरोलॉजी, फंगी और परजीवी विज्ञान का परिचय","जीवाणुशास्त्र, विषाणुशास्त्र, बुरशी आणि परजीवीशास्त्राचा परिचय"],
["Case study of patient","रोगी का केस स्टडी","रुग्णाचा केस स्टडी"],
["Approach to patient, history taking and case-sheet writing","रोगी से संपर्क, हिस्ट्री लेना और केस-शीट लिखना","रुग्णाशी संवाद, हिस्ट्री घेणे आणि केस-शीट लिहिणे"],
["Principles and philosophy of naturopathy","प्राकृतिक चिकित्सा के सिद्धांत और दर्शन","निसर्गोपचाराची तत्त्वे आणि तत्त्वज्ञान"],
["Five elements and three gunas","पंच तत्व और तीन गुण","पंचतत्त्वे आणि तीन गुण"],["Health and disease","स्वास्थ्य और रोग","आरोग्य आणि रोग"],
["Panchmahabhutatmak chikitsa","पंचमहाभूतात्मक चिकित्सा"],["Sun therapy, chromotherapy, sunbath","सूर्य चिकित्सा, रंग चिकित्सा (क्रोमोथेरेपी), सूर्य स्नान","सूर्य चिकित्सा, रंग चिकित्सा (क्रोमोथेरपी), सूर्यस्नान"],
["Hydrotherapy","जल चिकित्सा","जलचिकित्सा"],["Air therapy","वायु चिकित्सा","वायुचिकित्सा"],["Earth therapy: mud therapy","पृथ्वी तत्व: मिट्टी चिकित्सा","पृथ्वी तत्त्व: माती चिकित्सा"],
["Magnetotherapy","चुंबक चिकित्सा"],["Fasting therapy","उपवास चिकित्सा"],["Massage therapy","मसाज थेरेपी","मसाज थेरपी"],
["Acupressure and reflexology","एक्यूप्रेशर और रिफ्लेक्सोलॉजी","अॅक्युप्रेशर आणि रिफ्लेक्सोलॉजी"],["Detoxification treatments","डिटॉक्सिफिकेशन उपचार"],
["Ideal and polluted lifestyle","आदर्श और प्रदूषित जीवनशैली","आदर्श आणि प्रदूषित जीवनशैली"],
["History and development of nature cure","प्राकृतिक चिकित्सा का इतिहास और विकास","निसर्गोपचाराचा इतिहास आणि विकास"],
["Ten fundamental principles of naturopathy","प्राकृतिक चिकित्सा के दस मूल सिद्धांत","निसर्गोपचाराची दहा मूलभूत तत्त्वे"],
["Legends in naturopathy","प्राकृतिक चिकित्सा के प्रणेता","निसर्गोपचारातील प्रणेते"],
["Constituents of food","आहार के घटक","अन्नाचे घटक"],["Diet is the medicine","आहार ही औषधि है","आहार हेच औषध"],["Types of diet","आहार के प्रकार","आहाराचे प्रकार"],
["Juice therapy and wheatgrass juice","जूस थेरेपी और व्हीटग्रास जूस","ज्यूस थेरपी आणि व्हीटग्रास ज्यूस"],
["Cooking methods according to naturopathy","प्राकृतिक चिकित्सा के अनुसार पाक विधियां","निसर्गोपचारानुसार स्वयंपाक पद्धती"],
["Herbal therapy","हर्बल चिकित्सा","वनौषधी चिकित्सा"],["Panchagavya","पंचगव्य"],["Organic farming","जैविक खेती","सेंद्रिय शेती"],["Balanced diet","संतुलित आहार"],
["Identification of organs and spine","अंगों और रीढ़ की पहचान","अवयव आणि पाठीच्या कण्याची ओळख"],["Massage and acupressure","मसाज और एक्यूप्रेशर","मसाज आणि अॅक्युप्रेशर"],
["Local massage and foot reflexology","स्थानीय मसाज और फुट रिफ्लेक्सोलॉजी","स्थानिक मसाज आणि फूट रिफ्लेक्सोलॉजी"],
["Blood pressure and TPR chart","रक्तचाप और TPR चार्ट","रक्तदाब आणि TPR चार्ट"],["Reading pathological reports","पैथोलॉजी रिपोर्ट पढ़ना","पॅथॉलॉजी अहवाल वाचन"],
["Case history and examination of the patient","रोगी का केस हिस्ट्री और परीक्षण","रुग्णाची केस हिस्ट्री आणि तपासणी"],
["Baths","स्नान"],["Steam therapy","भाप चिकित्सा","वाफ चिकित्सा"],["Compresses and packs","कंप्रेस और पैक","कॉम्प्रेस आणि पॅक"],["Fomentation","सेंक","शेक"],
["Mud therapy","मिट्टी चिकित्सा","माती चिकित्सा"],["Diet / kadha preparation","आहार / काढ़ा तैयार करना","आहार / काढा तयार करणे"],["Music therapy","संगीत चिकित्सा"],
["Bach flower remedy","बाख फ्लावर रेमेडी"],["Massage","मसाज"],["Acupressure","एक्यूप्रेशर","अॅक्युप्रेशर"],
["Various yogasanas","विविध योगासन","विविध योगासने"],["Surya Namaskar","सूर्य नमस्कार"],["Nadi Shuddhi","नाड़ी शुद्धि","नाडी शुद्धी"],
["Kapalbhati","कपालभाति"],["Ujjayi","उज्जायी"],["Bhastrika","भस्त्रिका"],["Shitali","शीतली"],["Sitkari","सीत्कारी"],["Jal Neti","जल नेति"],
["Vaman / Kunjar","वमन / कुंजर"],["Enema","एनिमा"],["Tratak","त्राटक"],["Yoga Nidra","योग निद्रा"],["Meditation","ध्यान"],
["Yoga for physical, mental and spiritual wellbeing.","शारीरिक, मानसिक और आध्यात्मिक कल्याण के लिए योग।","शारीरिक, मानसिक आणि आध्यात्मिक स्वास्थ्यासाठी योग."],
["Concept and definition of Yoga","योग की अवधारणा और परिभाषा","योगाची संकल्पना आणि व्याख्या"],["Ashtanga Yoga by Patanjali","पतंजलि का अष्टांग योग","पतंजलींचा अष्टांग योग"],
["Yogasanas: standing, sitting, supine, prone","योगासन: खड़े, बैठकर, पीठ के बल, पेट के बल","योगासने: उभी, बैठी, पाठीवर, पोटावर"],
["Do's and don'ts before and after asanas","आसन से पहले और बाद में क्या करें और क्या न करें","आसनांपूर्वी आणि नंतर काय करावे व काय टाळावे"],
["Pranayama","प्राणायाम"],["Yogic Shuddhikriya","योगिक शुद्धिक्रिया"],["Shatkarma","षट्कर्म"],["Bandha","बंध"],["Mudra","मुद्रा"],["Drishti","दृष्टि","दृष्टी"],
["Course Highlights","कोर्स की विशेषताएं","कोर्सची वैशिष्ट्ये"],
["Scientific and practical knowledge of naturopathy","प्राकृतिक चिकित्सा का वैज्ञानिक और व्यावहारिक ज्ञान","निसर्गोपचाराचे शास्त्रीय आणि प्रात्यक्षिक ज्ञान"],
["Training in yoga, pranayama and meditation","योग, प्राणायाम और ध्यान का प्रशिक्षण","योग, प्राणायाम आणि ध्यानाचे प्रशिक्षण"],
["Guidance on diet and lifestyle","आहार और जीवनशैली पर मार्गदर्शन","आहार आणि जीवनशैलीवर मार्गदर्शन"],
["Hydrotherapy and mud therapy","जल चिकित्सा और मिट्टी चिकित्सा","जलचिकित्सा आणि माती चिकित्सा"],
["Patient care and health education","रोगी देखभाल और स्वास्थ्य शिक्षा","रुग्णसेवा आणि आरोग्य शिक्षण"],
["Hands-on practical training","हैंड्स-ऑन प्रैक्टिकल प्रशिक्षण","प्रत्यक्ष प्रात्यक्षिक प्रशिक्षण"],["Practical exposure","प्रैक्टिकल अनुभव","प्रात्यक्षिक अनुभव"],
["Career and self-employment opportunities","करियर और स्वरोजगार के अवसर","करिअर आणि स्वयंरोजगाराच्या संधी"],
["Students may work as a Naturopathy and Yoga Therapist in various centres, such as gyms, spas and schools, or pursue self-employment.","विद्यार्थी जिम, स्पा और स्कूल जैसे विभिन्न केंद्रों में प्राकृतिक चिकित्सा और योग थेरेपिस्ट के रूप में काम कर सकते हैं या स्वरोजगार अपना सकते हैं।","विद्यार्थी जिम, स्पा आणि शाळा अशा विविध केंद्रांमध्ये निसर्गोपचार व योग थेरपिस्ट म्हणून काम करू शकतात किंवा स्वयंरोजगार करू शकतात."],
["Naturopathy & Yoga Therapist","प्राकृतिक चिकित्सा एवं योग थेरेपिस्ट","निसर्गोपचार व योग थेरपिस्ट"],
["Yoga-related wellness roles","योग से जुड़ी वेलनेस भूमिकाएं","योगाशी संबंधित वेलनेस भूमिका"],["Wellness centres","वेलनेस सेंटर","वेलनेस सेंटर्स"],
["Yoga centres","योग केंद्र","योग केंद्रे"],["Gyms / spas","जिम / स्पा"],["Schools","स्कूल","शाळा"],["Self-employment","स्वरोजगार","स्वयंरोजगार"],
["Career opportunities depend on individual qualifications, applicable regulations and employment requirements.","करियर के अवसर व्यक्तिगत योग्यता, लागू नियमों और रोज़गार की आवश्यकताओं पर निर्भर करते हैं।","करिअरच्या संधी वैयक्तिक पात्रता, लागू नियम आणि नोकरीच्या आवश्यकतांवर अवलंबून असतात."],
["Eligibility","पात्रता"],
["Please confirm the current eligibility requirement with the institute before applying.","आवेदन करने से पहले कृपया संस्थान से वर्तमान पात्रता की पुष्टि कर लें।","अर्ज करण्यापूर्वी कृपया संस्थेकडून सध्याच्या पात्रतेची खात्री करा."],
["As per course document: S.S.C. Pass","कोर्स दस्तावेज़ के अनुसार: एस.एस.सी. उत्तीर्ण","कोर्स दस्तऐवजानुसार: एस.एस.सी. उत्तीर्ण"],
["Online Admission Form","ऑनलाइन प्रवेश फॉर्म","ऑनलाइन प्रवेश अर्ज"],
["Only 25 seats per batch. Fill in six short steps to apply.","प्रति बैच केवल 25 सीटें। आवेदन के लिए छह छोटे चरण भरें।","प्रत्येक बॅचमध्ये फक्त 25 जागा. अर्जासाठी सहा छोटे टप्पे भरा."],
["Step","चरण","टप्पा"],["Personal details","व्यक्तिगत विवरण","वैयक्तिक तपशील"],["Address","पता","पत्ता"],["Educational details","शैक्षणिक विवरण","शैक्षणिक तपशील"],
["Course details","कोर्स विवरण","कोर्स तपशील"],["Additional information","अतिरिक्त जानकारी","अतिरिक्त माहिती"],["Declaration","घोषणा","घोषणापत्र"],
["Full Name*","पूरा नाम*","पूर्ण नाव*"],["Date of Birth*","जन्म तिथि*","जन्मतारीख*"],["Gender*","लिंग*"],["Select","चुनें","निवडा"],
["Male","पुरुष"],["Female","महिला","स्त्री"],["Other","अन्य","इतर"],
["Father's / Mother's / Guardian's Name*","पिता / माता / अभिभावक का नाम*","वडील / आई / पालकांचे नाव*"],["Mobile Number*","मोबाइल नंबर*"],
["WhatsApp Number","व्हाट्सऐप नंबर","व्हॉट्सअॅप नंबर"],["Email Address*","ईमेल पता*","ईमेल पत्ता*"],
["Aadhaar / ID Number","आधार / आईडी नंबर","आधार / ओळखपत्र क्रमांक"],["Blood Group","ब्लड ग्रुप","रक्तगट"],
["Address*","पता*","पत्ता*"],["City*","शहर*"],["District*","जिला*","जिल्हा*"],["State*","राज्य*"],["PIN Code*","पिन कोड*"],
["Highest Qualification*","उच्चतम योग्यता*","सर्वोच्च शैक्षणिक पात्रता*"],["Examination Passed*","उत्तीर्ण परीक्षा*"],
["School / College Name*","स्कूल / कॉलेज का नाम*","शाळा / महाविद्यालयाचे नाव*"],["Board / University*","बोर्ड / विश्वविद्यालय*","बोर्ड / विद्यापीठ*"],
["Passing Year*","उत्तीर्ण वर्ष*"],["Percentage / Grade*","प्रतिशत / ग्रेड*","टक्केवारी / ग्रेड*"],
["Educational Certificate","शैक्षणिक प्रमाणपत्र"],["Passport-size Photograph","पासपोर्ट साइज फोटो"],["Identity Proof","पहचान प्रमाण","ओळखीचा पुरावा"],
["Course:","कोर्स:"],["Course Code:","कोर्स कोड:"],["Duration:","अवधि:","कालावधी:"],["Mode:","प्रकार:"],
["Why do you want to join this course?*","आप यह कोर्स क्यों करना चाहते हैं?*","तुम्हाला हा कोर्स का करायचा आहे?*"],
["Previous experience in Yoga / Naturopathy","योग / प्राकृतिक चिकित्सा में पिछला अनुभव","योग / निसर्गोपचारातील पूर्वीचा अनुभव"],
["Any relevant certification?","कोई संबंधित प्रमाणपत्र?","काही संबंधित प्रमाणपत्र?"],
["How did you hear about us?","आपको हमारे बारे में कैसे पता चला?","तुम्हाला आमच्याबद्दल कसे कळले?"],
["Poster / Pamphlet","पोस्टर / पैम्फलेट","पोस्टर / पत्रक"],["Friend / Family","मित्र / परिवार","मित्र / कुटुंब"],["Social media","सोशल मीडिया"],["Website","वेबसाइट"],
["I confirm that the information provided by me is true and complete to the best of my knowledge. I understand that admission is subject to verification and approval by the institute.","मैं पुष्टि करता/करती हूँ कि मेरे द्वारा दी गई जानकारी मेरे सर्वोत्तम ज्ञान के अनुसार सत्य और पूर्ण है। मैं समझता/समझती हूँ कि प्रवेश संस्थान द्वारा सत्यापन और अनुमोदन के अधीन है।","मी खात्री देतो/देते की मी दिलेली माहिती माझ्या माहितीनुसार खरी आणि पूर्ण आहे. मला समजते की प्रवेश संस्थेच्या पडताळणी आणि मंजुरीच्या अधीन आहे."],
["Back","पीछे","मागे"],["Next","आगे","पुढे"],["Submit Admission Application","प्रवेश आवेदन जमा करें","प्रवेश अर्ज सादर करा"],["Submitting...","जमा हो रहा है...","सादर होत आहे..."],
["Please tick the declaration to continue.","जारी रखने के लिए कृपया घोषणा पर टिक करें।","पुढे जाण्यासाठी कृपया घोषणेवर टिक करा."],["Please check:","कृपया जांचें:","कृपया तपासा:"],
["Submission failed. Please try again or call 9987941559.","जमा नहीं हो सका। कृपया पुनः प्रयास करें या 9987941559 पर कॉल करें।","सादर करता आले नाही. कृपया पुन्हा प्रयत्न करा किंवा 9987941559 वर कॉल करा."],
["10-digit mobile number","10 अंकों का मोबाइल नंबर","10 अंकी मोबाइल नंबर"],["12-digit Aadhaar number","12 अंकों का आधार नंबर","12 अंकी आधार क्रमांक"],["6-digit PIN code","6 अंकों का पिन कोड","6 अंकी पिन कोड"],
["Thank You for Applying!","आवेदन करने के लिए धन्यवाद!","अर्ज केल्याबद्दल धन्यवाद!"],["Application Submitted Successfully.","आवेदन सफलतापूर्वक जमा हो गया।","अर्ज यशस्वीरित्या सादर झाला."],
["Your admission application has been successfully submitted.","आपका प्रवेश आवेदन सफलतापूर्वक जमा हो गया है।","तुमचा प्रवेश अर्ज यशस्वीरित्या सादर झाला आहे."],
["Application No.","आवेदन क्रमांक","अर्ज क्रमांक"],["Applicant","आवेदक","अर्जदार"],["Submitted","जमा किया गया","सादर केले"],
["For follow-up, call Yogesh Mahangade:","अधिक जानकारी के लिए Yogesh Mahangade को कॉल करें:","पुढील माहितीसाठी Yogesh Mahangade यांना कॉल करा:"],
["Download Application","आवेदन डाउनलोड करें","अर्ज डाउनलोड करा"],["Back to Home","होम पर वापस जाएं","मुख्यपृष्ठावर परत जा"],["Contact Institute","संस्थान से संपर्क करें","संस्थेशी संपर्क साधा"],
["For course information and admission enquiries, contact the institute.","कोर्स की जानकारी और प्रवेश पूछताछ के लिए संस्थान से संपर्क करें।","कोर्सची माहिती आणि प्रवेश चौकशीसाठी संस्थेशी संपर्क साधा."],
["Fees, dates and timings: contact the institute for details.","शुल्क, तिथियां और समय: विवरण के लिए संस्थान से संपर्क करें।","शुल्क, तारखा आणि वेळा: तपशीलासाठी संस्थेशी संपर्क साधा."],
["Call Now","अभी कॉल करें","आता कॉल करा"],
["Manohar Vasudha Foundation. All rights reserved.","मनोहर वसुधा फाउंडेशन। सर्वाधिकार सुरक्षित।","मनोहर वसुधा फाउंडेशन. सर्व हक्क राखीव."]
];

const L = { hi: {}, mr: {} };
D.forEach(([e, h, m]) => { L.hi[e] = h; L.mr[e] = m || h; });
let LANG = "en";
try { LANG = localStorage.getItem("mvfLang") || "en"; } catch (_) {}
if (!L[LANG]) LANG = "en";

function t(k) { return (L[LANG] && L[LANG][k]) || k; }

function applyLang() {
  document.documentElement.lang = LANG;
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = w.nextNode())) {
    if (/^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)) continue;
    const m = n.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (n.__o === undefined) n.__o = m[2].replace(/\s+/g, " ");
    if (!n.__o) continue;
    let k = n.__o, pre = "";
    if (k.startsWith("✅ ")) { pre = "✅ "; k = k.slice(2); }
    n.nodeValue = m[1] + pre + (LANG === "en" ? k : (L[LANG][k] || k)) + m[3];
  }
  document.dispatchEvent(new Event("langchange"));
}

document.addEventListener("DOMContentLoaded", () => {
  const s = document.createElement("select");
  s.id = "lang";
  s.setAttribute("aria-label", "Language");
  s.innerHTML = '<option value="en">English</option><option value="hi">हिन्दी</option><option value="mr">मराठी</option>';
  s.value = LANG;
  s.onchange = () => {
    LANG = s.value;
    try { localStorage.setItem("mvfLang", LANG); } catch (_) {}
    applyLang();
  };
  const nav = document.querySelector("nav");
  nav.insertBefore(s, document.getElementById("burger"));
  applyLang();
});
