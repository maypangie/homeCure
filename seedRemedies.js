const mongoose = require("mongoose");
const Remedy = require("./app/models/remedy"); 


const remediesData = [
    {
        symptom: "stomach ache",
        remedies: [
            { name: "Peppermint", usage: "Can help with nausea, cramps, and spasms. Try peppermint tea, gum, or candy." },
            { name: "Ginger", usage: "Helps with nausea, vomiting, and upset stomach. Try ginger tea or supplements." },
            { name: "Chamomile", usage: "Soothes upset stomach and reduces cramps. Drink chamomile tea." },
            { name: "Banana", usage: "Soothes stomach acidity and eases digestion." },
            { name: "Cinnamon", usage: "Reduces bloating and gas. Use in teas or warm water." },
            { name: "Lemon", usage: "Stimulates digestion. Add lemon to water or tea." },
            { name: "Licorice", usage: "Prevents and treats ulcers. Try licorice tea or capsules." },
            { name: "Cayenne Pepper", usage: "Fights infections and reduces ulcers. Use sparingly in food or tea." },
            { name: "Rosemary", usage: "Adjusts gut bacteria composition. Add to meals or teas." },
            { name: "Garlic", usage: "Contains prebiotic fiber for gut health. Use raw or cooked in meals." },
            { name: "Apply Heat", usage: "Try putting a heating pad or hot towel on your abdomen. The heat can help relax the muscles and relieve cramping. Taking a hot shower or bath with Epsom salts may also help."},
            { name: "Note", usage: "You can also try drinking soda water to help release gas, or taking apple cider vinegar to neutralize an upset stomach. You should seek medical attention if you experience chronic or severe abdominal pain, bloody or black stool, unexplained weight loss, signs of dehydration, or trouble breathing."}
        ]
    },
    
    {
        symptom: "headache",
        remedies: [
            { name: "Peppermint", usage: "Apply peppermint oil on temples or drink peppermint tea. Its cooling properties may help relax muscles and improve blood flow." },
            { name: "Lavender", usage: "Reduces stress headaches. Inhale lavender oil or use in a diffuser." },
            { name: "Ginger", usage: "Eases migraines. Try ginger tea or supplements. Ginger has anti-inflammatory properties and can reduce headache intensity." },
            { name: "Feverfew", usage: "May reduce migraine frequency. Try capsules or tea. It is known for reducing migraine frequency and severity." },
            { name: "Willow Bark", usage: "Often referred to as natures aspirin, it can help with pain relief. Consume as tea or capsules, but consult with a healthcare provider first"},
            { name: "Hydration", usage: "Dehydration is a common headache trigger. Drink plenty of water and add electrolytes if needed."},
            { name: "Cold Compress", usage: "Place a cold pack or a cloth soaked in cold water on your forehead for 15-20 minutes. This can numb the pain and reduce inflammation."},
            { name: "Acupressure", usage: "Massage the pressure point between your thumb and index finger for a few minutes. Acupressure helps improve circulation and relieve pain."},
            { name: "Note", usage: "These remedies are not a substitute for professional medical advice, diagnosis, or treatment. If you experience persistent, severe, or recurring headaches, or if your symptoms worsen, please consult a healthcare professional or doctor promptly. Delaying proper medical attention could result in complications or undiagnosed conditions. Always prioritize your health and well-being."}

        ]
    },
{
    symptom: "stuffy nose",
    remedies: [
        { name: "Steam Inhalation", usage: "Fill a bowl with hot water, place your face above it, and cover your head with a towel to trap the steam. Add essential oils like eucalyptus, peppermint, or tea tree oil for additional relief. " },
        { name: "Hydration", usage: "Drink plenty of water, herbal teas, or clear broths to thin mucus and make it easier to drain." },
        { name: "Honey and Ginger Tea", usage: "Combine honey, grated ginger, and warm water to create a soothing tea. Ginger reduces inflammation, and honey coats the throat and offers mild relief." },
        { name: " Humidifier", usage: "Use a humidifier to add moisture to the air, preventing your nasal passages from drying out and reducing congestion." },
        { name: "Essential Oils", usage: "Diffuse peppermint, eucalyptus, or lavender essential oils in your room to help open airways and relax." },
        { name: "Apple Cider Vinegar", usage: "Mix 1-2 tablespoons of apple cider vinegar with warm water and honey. Drinking this can help thin mucus and reduce inflammation." },
        { name: "Spicy Foods", usage: "Eating spicy foods like chili peppers or jalepenos can temporarily clear nasal passages by stimulating mucus flow." },
        { name: "Elevate Your Head", usage: "Sleep with an extra pillow under your head to promote sinus drainage and reduce congestion." },
        { name: "Note", usage: "If symptoms persist for more than 10 days or are accompanied by fever, facial pain, or swelling, consult a healthcare professional for evaluation."}
    ]
},

{
    symptom: "congestion",
    remedies: [
        { name: "Steam Inhalation", usage: "Fill a bowl with hot water, place your face above it, and cover your head with a towel to trap the steam. Add essential oils like eucalyptus, peppermint, or tea tree oil for additional relief. " },
        { name: "Hydration", usage: "Drink plenty of water, herbal teas, or clear broths to thin mucus and make it easier to drain." },
        { name: "Honey and Ginger Tea", usage: "Combine honey, grated ginger, and warm water to create a soothing tea. Ginger reduces inflammation, and honey coats the throat and offers mild relief." },
        { name: " Humidifier", usage: "Use a humidifier to add moisture to the air, preventing your nasal passages from drying out and reducing congestion." },
        { name: "Essential Oils", usage: "Diffuse peppermint, eucalyptus, or lavender essential oils in your room to help open airways and relax." },
        { name: "Apple Cider Vinegar", usage: "Mix 1-2 tablespoons of apple cider vinegar with warm water and honey. Drinking this can help thin mucus and reduce inflammation." },
        { name: "Spicy Foods", usage: "Eating spicy foods like chili peppers or jalepenos can temporarily clear nasal passages by stimulating mucus flow." },
        { name: "Elevate Your Head", usage: "Sleep with an extra pillow under your head to promote sinus drainage and reduce congestion." },
        { name: "Note", usage: "If symptoms persist for more than 10 days or are accompanied by fever, facial pain, or swelling, consult a healthcare professional for evaluation."}
    ]
},


{
    symptom: "toothache",
    remedies: [
        { name: "Cold Compress", usage: "Such as a towel-wrapped bag of ice-apply to the affected area to relieve pain and reduce inflammation and swelling." },
        { name: "Clove", usage: "Dilute with jojoba or sunflower oil – carrier oils – (about 15 drops of clove oil to 1 ounce of carrier oil) to reduce inflammation or numb pain." },
        { name: "Garlic", usage: "Crush garlic cloves to create a paste and apply to the affected tooth to serve as a pain reliever." },
        { name: "Guava Leaves", usage: "Chew on leaves or add crushed leaves to boiling water to make into a mouthwash to heal oral wounds" },
        { name: "Hydrogen Peroxide Rinse", usage: " (Dilute-3% mixed with equal parts water) – relieves inflammation and pain, heals bleeding gums, and reduces plaque." },
        { name: "Peppermint Tea Bags", usage: "Apply cool tea bag (put in the freezer for a few minutes) and apply to the affected tooth to numb pain and soothe gums." },
        { name: "Salt Water Rinse", usage: "(1/2 teaspoon of salt in a glass of warm water) – serves as a natural disinfectant to reduce inflammation and heal oral wounds." },
        { name: "Thyme", usage: "Dilute the essential oil with a carrier oil to apply to the affected area or use as a mouthwash to fight bacteria." },
        { name: "Pure Vanilla Extract", usage: "Dab a small amount to the affected area to help numb pain."},
        { name: "Orajel", usage: "Apply to affected area. Orajel works for tooth pain by temporarily numbing the affected area through its active ingredient, benzocaine, which acts as a local anesthetic, blocking pain signals from reaching the brain, providing immediate relief from toothaches and gum discomfort; essentially, it numbs the area where you apply it, offering short-term pain relief"},
        { name: "Note", usage: "Painkillers can provide temporary relief until you can get to the dentist, but do not rely on them for the long term. Until you can get to your dentist, ibuprofen is the most common pain reliever to relieve your toothache pain. Non-steroidal anti-inflammatory drugs (NSAIDs) are also known for reducing discomfort. "}
    ]
},

{
    symptom: "cramps",
    remedies: [
        { name: "Apply Heat", usage: "Use a heating pad, or warm towel on the affected area." },
        { name: "Stay Hydrated", usage: "Drink plenty of water throughout the day, especially during your menstrual cycle or after exercise. Dehydration can worsen muscle cramps." },
        { name: "Ginger Tea", usage: "Brew fresh ginger in hot water, add honey or lemon for flavor, and sip slowly. Ginger reduces inflammation and soothes pain." },
        { name: "Peppermint Tea", usage: "Eases stomach cramps and bloating." },
        { name: "Chamomile Tea", usage: "Relaxes muscles and calms the body." },
        { name: "Cinnamon Tea", usage: "Improves circulation and reduces menstrual cramps." },
        { name: "Essential Oils Massage", usage: "Gently massage the cramping area with diluted lavender, peppermint, or chamomile essential oil. Aromatherapy and massage relax muscles and improve blood flow." },
        { name: "Epsom Salt Bath", usage: "Magnesium in the salt is absorbed through the skin and relaxes muscles. Add 1-2 cups of Epsom salt to a warm bath and soak for 20 minutes." },
        { name: "Apple Cider Vinegar", usage: "Helps alleviate stomach cramps by balancing stomach acids. Mix 1-2 tablespoons of apple cider vinegar in a glass of warm water and drink."},
        { name: "Eat Anti-Inflammatory Foods", usage: "Include turmeric, pineapple, berries, and fatty fish in your diet. These foods reduce inflammation and provide natural pain relief."},
        { name: "Magnesium-Rich Foods", usage: "Include bananas, nuts, seeds, dark leafy greens, and avocados in your diet. Magnesium helps relax muscles and prevent cramping."},
        { name: "Rest and Relaxation", usage: "Practice deep breathing, mindfulness, meditation, or simply laying down. Stress and tension can worsen cramping. "},
        { name: "Note", usage: "If the cramps persist, worsen, or are accompanied by severe symptoms (such as fever, vomiting, or fainting), consult a healthcare provider. "}
    ]
},

{
    symptom: "menstrual cramps",
    remedies: [
        { name: "Apply Heat", usage: "Use a heating pad, or warm towel on the affected area." },
        { name: "Stay Hydrated", usage: "Drink plenty of water throughout the day, especially during your menstrual cycle or after exercise. Dehydration can worsen muscle cramps." },
        { name: "Ginger Tea", usage: "Brew fresh ginger in hot water, add honey or lemon for flavor, and sip slowly. Ginger reduces inflammation and soothes pain." },
        { name: "Peppermint Tea", usage: "Eases stomach cramps and bloating." },
        { name: "Chamomile Tea", usage: "Relaxes muscles and calms the body." },
        { name: "Cinnamon Tea", usage: "Improves circulation and reduces menstrual cramps." },
        { name: "Essential Oils Massage", usage: "Gently massage the cramping area with diluted lavender, peppermint, or chamomile essential oil. Aromatherapy and massage relax muscles and improve blood flow." },
        { name: "Epsom Salt Bath", usage: "Magnesium in the salt is absorbed through the skin and relaxes muscles. Add 1-2 cups of Epsom salt to a warm bath and soak for 20 minutes." },
        { name: "Apple Cider Vinegar", usage: "Helps alleviate stomach cramps by balancing stomach acids. Mix 1-2 tablespoons of apple cider vinegar in a glass of warm water and drink."},
        { name: "Eat Anti-Inflammatory Foods", usage: "Include turmeric, pineapple, berries, and fatty fish in your diet. These foods reduce inflammation and provide natural pain relief."},
        { name: "Magnesium-Rich Foods", usage: "Include bananas, nuts, seeds, dark leafy greens, and avocados in your diet. Magnesium helps relax muscles and prevent cramping."},
        { name: "Rest and Relaxation", usage: "Practice deep breathing, mindfulness, meditation, or simply laying down. Stress and tension can worsen cramping. "},
        { name: "Note", usage: "If the cramps persist, worsen, or are accompanied by severe symptoms (such as fever, vomiting, or fainting), consult a healthcare provider. "}
    ]
},

{
    symptom: "heartburn",
    remedies: [
        { name: "Drink Warm Water with Lemon", usage: "Lemon juice, though acidic, can have an alkalizing effect on the stomach, helping balance acid levels. Mix the juice of half a lemon with warm water and sip it 30 minutes before meals. " },
        { name: "Ginger Tea", usage: " Ginger has anti-inflammatory properties that help soothe the stomach and reduce acid production. Boil fresh ginger slices in water for 10 minutes. Strain and drink." },
        { name: "Eat a Banana", usage: "Bananas are alkaline and can help coat the stomach lining, reducing acid irritation." },
        { name: "Aloe Vera Juice", usage: "Aloe vera soothes the esophagus and reduces inflammation caused by acid reflux. Drink 1/2 cup of aloe vera juice (unsweetened) before meals." },
        { name: "Baking Soda Solution", usage: "Baking soda neutralizes stomach acid and provides quick relief from heartburn.  Mix 1/2 teaspoon of baking soda in a glass of water and drink it. Caution: Avoid frequent use, as it can affect electrolyte balance" },
        { name: "Apple Cider Vinegar", usage: "Mix 1-2 tablespoons of apple cider vinegar with warm water. Drinking this can help balance stomach acid levels and aids digestion." },
        { name: "Slippery Elm Tea", usage: "Coats the stomach and esophagus, reducing acid irritation." },
        { name: "Fennel Seeds", usage: "Fennel reduces bloating and aids digestion, preventing acid reflux. Chew a teaspoon of fennel seeds after meals or brew fennel tea." },
        { name: "Note", usage: "If chest pain or heartburn occurs frequently, consult a healthcare professional. Chest pain can sometimes indicate serious conditions like a heart attack, especially if accompanied by dizziness, shortness of breath, or radiating pain."}
    ]
},

{
    symptom: "chest pain",
    remedies: [
        { name: "Drink Warm Water with Lemon", usage: "Lemon juice, though acidic, can have an alkalizing effect on the stomach, helping balance acid levels. Mix the juice of half a lemon with warm water and sip it 30 minutes before meals. " },
        { name: "Ginger Tea", usage: " Ginger has anti-inflammatory properties that help soothe the stomach and reduce acid production. Boil fresh ginger slices in water for 10 minutes. Strain and drink." },
        { name: "Eat a Banana", usage: "Bananas are alkaline and can help coat the stomach lining, reducing acid irritation." },
        { name: "Aloe Vera Juice", usage: "Aloe vera soothes the esophagus and reduces inflammation caused by acid reflux. Drink 1/2 cup of aloe vera juice (unsweetened) before meals." },
        { name: "Baking Soda Solution", usage: "Baking soda neutralizes stomach acid and provides quick relief from heartburn.  Mix 1/2 teaspoon of baking soda in a glass of water and drink it. Caution: Avoid frequent use, as it can affect electrolyte balance" },
        { name: "Apple Cider Vinegar", usage: "Mix 1-2 tablespoons of apple cider vinegar with warm water. Drinking this can help balance stomach acid levels and aids digestion." },
        { name: "Slippery Elm Tea", usage: "Coats the stomach and esophagus, reducing acid irritation." },
        { name: "Fennel Seeds", usage: "Fennel reduces bloating and aids digestion, preventing acid reflux. Chew a teaspoon of fennel seeds after meals or brew fennel tea." },
        { name: "Note", usage: "If chest pain or heartburn occurs frequently, consult a healthcare professional. Chest pain can sometimes indicate serious conditions like a heart attack, especially if accompanied by dizziness, shortness of breath, or radiating pain."}
    ]
},

{
    symptom: "joint pain",
    remedies: [
        { name: "Epsom Salt Soak", usage: "Epsom salt is rich in magnesium, which can help reduce inflammation and ease joint stiffness. Add 1–2 cups of Epsom salt to a warm bath and soak for 30 minutes. " },
        { name: "Turmeric and Honey", usage: "Turmeric contains curcumin, a powerful anti-inflammatory compound. Mix 1 teaspoon of turmeric powder with honey and warm water to make a drink. Consume once daily." },
        { name: "Hot and Cold Compress", usage: "This method helps manage inflammation and stiffness. Apply a hot compress for 15 minutes to improve blood flow, then follow with a cold compress for 10 minutes to reduce swelling." },
        { name: "Massage with Essential Oils", usage: "Essential oils have anti-inflammatory and cooling properties. Massage the joint with a blend of olive oil and a few drops of peppermint or eucalyptus oil." },
        { name: "Magnesium-Rich Foods", usage: "Magnesium helps relax muscles and prevent cramps. Eat foods like bananas, spinach, almonds, and avocados. Alternatively, you can take daily magnesium supplements." },
        { name: "Apple Cider Vinegar", usage: "Mix 1-2 tablespoons of apple cider vinegar with warm water. Drinking this helps relax muscles and reduces inflammation.." },
        { name: "Topical Arnica Gel", usage: "Arnica reduces pain and inflammation naturally. Apply arnica gel to the affected area as per the instructions." },
        { name: "Mustard Oil Rub", usage: "Mustard oil increases blood flow and has natural warming properties. Warm mustard oil and gently massage the sore area." },
        { name: "Hydration", usage: "Proper hydration helps flush out toxins and reduces muscle soreness. Drink at least 8 glasses of water daily." },
        { name: "Rest and Elevation", usage: "Rest the affected area and elevate it using a pillow. This reduces swelling and promotes faster healing" },
        { name: "Note", usage: "While these remedies can help with mild to moderate pain, consult a doctor for persistent or severe pain, especially if it limits your daily activities or is accompanied by swelling or redness."}
    ]
},

{
symptom: "muscle pain",
remedies: [
    { name: "Epsom Salt Soak", usage: "Epsom salt is rich in magnesium, which can help reduce inflammation and ease joint stiffness. Add 1–2 cups of Epsom salt to a warm bath and soak for 30 minutes. " },
    { name: "Turmeric and Honey", usage: "Turmeric contains curcumin, a powerful anti-inflammatory compound. Mix 1 teaspoon of turmeric powder with honey and warm water to make a drink. Consume once daily." },
    { name: "Hot and Cold Compress", usage: "This method helps manage inflammation and stiffness. Apply a hot compress for 15 minutes to improve blood flow, then follow with a cold compress for 10 minutes to reduce swelling." },
    { name: "Massage with Essential Oils", usage: "Essential oils have anti-inflammatory and cooling properties. Massage the joint with a blend of olive oil and a few drops of peppermint or eucalyptus oil." },
    { name: "Magnesium-Rich Foods", usage: "Magnesium helps relax muscles and prevent cramps. Eat foods like bananas, spinach, almonds, and avocados. Alternatively, you can take daily magnesium supplements." },
    { name: "Apple Cider Vinegar", usage: "Mix 1-2 tablespoons of apple cider vinegar with warm water. Drinking this helps relax muscles and reduces inflammation.." },
    { name: "Topical Arnica Gel", usage: "Arnica reduces pain and inflammation naturally. Apply arnica gel to the affected area as per the instructions." },
    { name: "Mustard Oil Rub", usage: "Mustard oil increases blood flow and has natural warming properties. Warm mustard oil and gently massage the sore area." },
    { name: "Hydration", usage: "Proper hydration helps flush out toxins and reduces muscle soreness. Drink at least 8 glasses of water daily." },
    { name: "Rest and Elevation", usage: "Rest the affected area and elevate it using a pillow. This reduces swelling and promotes faster healing" },
    { name: "Note", usage: "While these remedies can help with mild to moderate pain, consult a doctor for persistent or severe pain, especially if it limits your daily activities or is accompanied by swelling or redness."}
]
},


{
symptom: "soreness",
remedies: [
    { name: "Epsom Salt Soak", usage: "Epsom salt is rich in magnesium, which can help reduce inflammation and ease joint stiffness. Add 1–2 cups of Epsom salt to a warm bath and soak for 30 minutes. " },
    { name: "Turmeric and Honey", usage: "Turmeric contains curcumin, a powerful anti-inflammatory compound. Mix 1 teaspoon of turmeric powder with honey and warm water to make a drink. Consume once daily." },
    { name: "Hot and Cold Compress", usage: "This method helps manage inflammation and stiffness. Apply a hot compress for 15 minutes to improve blood flow, then follow with a cold compress for 10 minutes to reduce swelling." },
    { name: "Massage with Essential Oils", usage: "Essential oils have anti-inflammatory and cooling properties. Massage the joint with a blend of olive oil and a few drops of peppermint or eucalyptus oil." },
    { name: "Magnesium-Rich Foods", usage: "Magnesium helps relax muscles and prevent cramps. Eat foods like bananas, spinach, almonds, and avocados. Alternatively, you can take daily magnesium supplements." },
    { name: "Apple Cider Vinegar", usage: "Mix 1-2 tablespoons of apple cider vinegar with warm water. Drinking this helps relax muscles and reduces inflammation.." },
    { name: "Topical Arnica Gel", usage: "Arnica reduces pain and inflammation naturally. Apply arnica gel to the affected area as per the instructions." },
    { name: "Mustard Oil Rub", usage: "Mustard oil increases blood flow and has natural warming properties. Warm mustard oil and gently massage the sore area." },
    { name: "Hydration", usage: "Proper hydration helps flush out toxins and reduces muscle soreness. Drink at least 8 glasses of water daily." },
    { name: "Rest and Elevation", usage: "Rest the affected area and elevate it using a pillow. This reduces swelling and promotes faster healing" },
    { name: "Note", usage: "While these remedies can help with mild to moderate pain, consult a doctor for persistent or severe pain, especially if it limits your daily activities or is accompanied by swelling or redness."}
]
},

{
symptom: "nausea",
remedies: [
    { name: "Breathing Techniques", usage: "Sit in a comfortable position, close your eyes, and take slow, deep breaths. Inhale through your nose for a count of 4, hold your breath for 4 seconds, and exhale slowly through your mouth for a count of 4. Repeat for a few minutes until nausea subsides. " },
    { name: "Acupressure", usage: "Massage the P6 point (located three fingers down from the base of your palm on the inner wrist)." },
    { name: "Hydration", usage: "Sip small amounts of water, herbal teas, or electrolyte drinks frequently." },
    { name: "Ginger", usage: "Ginger has natural anti-nausea properties. Sip on ginger tea, chew on a piece of fresh ginger, or consume ginger candies." },
    { name: "Peppermint", usage: "Peppermint has a soothing effect on the stomach and can help reduce nausea. Drink peppermint tea, chew peppermint gum, or inhale peppermint essential oil." },
    { name: "Lemon", usage: "The scent and flavor of lemon can reduce nausea. Add lemon slices to water, suck on a lemon wedge, or inhale lemon essential oil." },
    { name: "Apple Cider Vinegar", usage: "Mix 1-2 tablespoons of apple cider vinegar with warm water and honey and drink it." },
    { name: "Banana", usage: "Eat a ripe banana to help ease nausea." },
    { name: "Cold Compress", usage: "A cool cloth on the back of your neck can help alleviate nausea. Apply a damp, cool compress for 10-15 minutes" }, 
    { name: "Rest", usage: "Lie down in a quiet, dimly lit space, preferably on your side. Avoid sudden movements or heavy activity to help your body recover." },
    { name: "Note", usage: "If nausea persists for an extended period, is accompanied by severe symptoms (such as vomiting, dehydration, or pain), or interferes with daily activities, consult a healthcare professional for evaluation and treatment."}
]
},

{
    symptom: "diahrrea",
    remedies: [
        { name: "BRAT Diet", usage: "Follow the BRAT diet: Bananas, Rice, Applesauce, and Toast, as these are easy-to-digest foods that help reduce diarrhea and bind stools." },
        { name: "Probiotics", usage: "Consume probiotic-rich foods like yogurt (unsweetened), kefir, or take probiotic supplements to restore healthy gut bacteria." },
        { name: "Hydration", usage: "Drink plenty of water, electrolyte drinks (like Pedialyte or coconut water), or oral rehydration solutions to replace lost fluids and electrolytes." },
        { name: "Ginger Tea", usage: "Brew fresh ginger in hot water and sip slowly to soothe the stomach and reduce inflammation." },
        { name: "Peppermint", usage: "Peppermint has a soothing effect on the stomach. Brew mint leaves in hot water to make tea, which can help soothe the digestive system." },
        { name: "Chamomile Tea", usage: "Brew chamomile tea and drink it warm to calm the stomach and reduce inflammation in the intestines." },
        { name: "Fennel Seeds", usage: "Chew fennel seeds or make fennel tea to relieve stomach cramps and improve digestion." },
        { name: "Blueberries", usage: "Consume blueberries or brew a tea using dried blueberries. They are rich in antioxidants and have anti-inflammatory properties." },
        { name: "Cinnamon", usage: "Brew cinnamon tea or sprinkle cinnamon on food to reduce inflammation and improve digestion. To prepare cinnamon for diarrhea, you can mix cinnamon and honey in a glass of warm water and drink it right away. You can also try cinnamon tea, which can be made by boiling a cinnamon stick in water for five minutes, then removing the stick and drinking the water." }, 
        { name: "Rest", usage: "Lie down and avoid strenuous activity to allow your body to recover." },
        { name: "Note", usage: "If diarrhea persists for more than 2 days, is accompanied by dehydration, severe abdominal pain, or blood in stools, consult a healthcare professional immediately for evaluation and treatment."}
    ]
    },
{
    symptom: "ear infection",
    remedies: [
        { name: "Warm Compress", usage: "Apply a warm cloth or heating pad to the affected ear for 10-15 minutes. Warmth improves blood circulation, which helps reduce swelling and relieves pressure in the ear." },
        { name: "Olive Oil", usage: "Slightly warm a few drops of olive oil and place them in the affected ear using a clean dropper. Olive oil soothes irritation, softens earwax, and may reduce itching or dryness in the ear canal." },
        { name: "Garlic Oil", usage: "Crush a garlic clove, mix it with warm olive oil, strain, and apply a few drops in the ear. Garlic contains allicin, a compound with natural antibacterial and antiviral properties, which may help fight infection." },
        { name: "Tea Tree Oil", usage: "Dilute tea tree oil with a carrier oil (like olive or coconut oil) and apply a drop around (not inside) the ear. Tea tree oil has strong antimicrobial and anti-inflammatory properties, helping reduce infection and swelling." },
        { name: "Hydrogen Peroxide Solution", usage: "Mix equal parts of 3% hydrogen peroxide and water. Use a dropper to place a few drops in the ear, let it sit for a few minutes, and tilt your head to drain. Hydrogen peroxide helps loosen and remove earwax, while its bubbling action may clean out debris and bacteria." },
        { name: "Apple Cider Vinegar", usage: "Mix equal parts apple cider vinegar and water. Soak a cotton ball in the solution and place it gently at the entrance of the ear. Apple cider vinegar has antimicrobial properties that may help eliminate bacteria or fungi in the ear." },
        { name: "Basil Leaves", usage: "Crush fresh basil leaves to extract the juice and apply it around (not inside) the affected ear.  Basil has anti-inflammatory and antibacterial properties, which can soothe pain and combat infection." },
        { name: "Ginger Oil", usage: "Apply ginger juice or ginger-infused oil around the outer ear to reduce pain and inflammation. Ginger is a natural anti-inflammatory and may help reduce swelling and discomfort." },
        { name: "Stay Hydrated", usage: "Drink plenty of water, herbal teas, or clear broths. Proper hydration helps thin mucus, which may reduce pressure if the ear infection is related to congestion." },
        { name: "Herbal Teas", usage: "Chamomile or peppermint teas soothe discomfort and relax muscles." },  
        { name: "Rest", usage: "Rest allows the body to focus its energy on healing, reduces stress on the immune system, and promotes recovery." },
        { name: "Note", usage: " Avoid inserting objects like cotton swabs into the ear, as it can worsen irritation or push wax deeper.If pain persists for more than 48 hours, or symptoms include fever, discharge, or hearing loss, consult a healthcare provider immediately."}
    ]
    },

    {
        symptom: "rash",
        remedies: [
            { name: "Dermatitis, Eczema, Dry Skin, Poison Ivy, Insect Bites, Hives, Sunburn, Chicken Pox, Shingles, Psoriasis", usage: "included, but not limited to"},
            { name: "Aloe Vera Gel", usage: "Apply fresh aloe vera gel directly to the rash. Allow it to sit for 20–30 minutes, then rinse with cool water. Aloe vera has soothing, anti-inflammatory, and antimicrobial properties that help reduce redness, itching, and irritation." },
            { name: "Oatmeal Bath", usage: "Add 1 cup of colloidal oatmeal to a lukewarm bath. Soak in it for 15–20 minutes. Oatmeal contains anti-inflammatory compounds called avenanthramides, which help soothe and moisturize irritated skin." },
            { name: "Coconut Oil", usage: "Apply a thin layer of virgin coconut oil to the rash and leave it on overnight. Coconut oil may effectively reduce eczema symptoms by soothing skin, easing irritation, and reducing the risk of infection " },
            { name: "Honey", usage: "Apply a thin layer of raw honey to the rash, leave it for 15–20 minutes, then rinse with lukewarm water. Honey is a natural humectant with antibacterial and anti-inflammatory properties that promote skin healing." },
            { name: "Tea Tree Oil", usage: "Mix a few drops of tea tree oil with a carrier oil (like coconut or olive oil) and apply to the rash. Tea tree oil has antimicrobial and anti-inflammatory properties that may help clear bacterial or fungal rashes." },
            { name: "Baking Soda Paste", usage: "Mix 1 tablespoon of baking soda with a small amount of water to make a paste. Apply to the rash for 10–15 minutes, then rinse off. Baking soda helps neutralize pH levels and reduces itchiness and inflammation." },
            { name: "Calamine Lotion", usage: "Apply calamine lotion directly to the rash using a cotton ball or your fingers. Calamine contains zinc oxide, which helps reduce itching and dry out oozing skin." },
            { name: "Note", usage: "Avoid scratching, as it may worsen irritation or cause infection. Consult a healthcare provider if the rash persists, spreads, or is accompanied by severe symptoms like fever, difficulty breathing, or swelling."}
        ]
        },

        {
            symptom: "bee sting",
            remedies: [
                { name: "Remove The Stinger!", usage: "Use tweezers to scrape out the stinger as soon as possible. Avoid squeezing it, as this can release more venom. Removing the stinger quickly reduces the amount of venom injected into your skin, minimizing swelling and pain."},
                { name: "Aloe Vera Gel", usage: "Apply fresh aloe vera gel directly to the sting. Repeat as needed.  Aloe vera is a natural anti-inflammatory and cooling agent that reduces pain, redness, and swelling." },
                { name: "Baking Soda Paste", usage: "Mix 1 tablespoon of baking soda with a small amount of water to make a paste. Baking soda neutralizes bee venom's acidity, relieving itching and swelling." },
                { name: "Honey", usage: "Apply a small amount of raw honey to the sting and cover it with a loose bandage. Leave it on for up to an hour. Honey has anti-inflammatory and antibacterial properties that soothe the skin and prevent infection." },
                { name: "Calamine Lotion", usage: "Apply calamine lotion to the sting area using a cotton ball. Calamine helps reduce itching and soothes irritated skin." },
                { name: "Papaya or Pineapple", usage: "Place a slice of raw papaya or pineapple on the sting for 10–15 minutes. These fruits contain enzymes (papain or bromelain) that break down bee venom proteins and reduce inflammation. " },
                { name: "Salt Paste", usage: "Mix salt with a few drops of water to make a paste. Apply it to the sting for 15–20 minutes. Salt helps draw out venom and reduces swelling." },
                { name: "Essential Oils", usage: "Mix a few drops of lavender or tea tree essential oil with a carrier oil (like coconut oil) and apply to the sting. Lavender and tea tree oils have anti-inflammatory and antimicrobial properties that reduce swelling and prevent infection" },
                { name: "Essential Oils", usage: "Mix a few drops of lavender or tea tree essential oil with a carrier oil (like coconut oil) and apply to the sting. Lavender and tea tree oils have anti-inflammatory and antimicrobial properties that reduce swelling and prevent infection" },
                { name: "Note", usage: "Avoid scratching, as it may worsen irritation or cause infection. Consult a healthcare provider if the rash persists, spreads, or is accompanied by severe symptoms like fever, difficulty breathing, or swelling."}
            ]
            },
        
    







];






// starter API - will add more remedies here!!!!







const seedRemedies = async () => {
    try {
        // Connect to MongoDB
        

        await mongoose.connect("mongodb+srv://earth2may:ZhOkk8IgTocXXoS9@homecure.yuwrp.mongodb.net/?retryWrites=true&w=majority&appName=homeCure", {
            useNewUrlParser: true,
           useUnifiedTopology: true
        });
        console.log("Connected to MongoDB.");

        // Clear existing remedies
        await Remedy.deleteMany({});
        console.log("Old remedies deleted.");

        // Add new remedies
        await Remedy.insertMany(remediesData);
        console.log("Remedies seeded successfully!");

        // Close the connection
        mongoose.connection.close();
    } catch (err) {
        console.error("Error seeding remedies:", err);
    }
};

seedRemedies();







/*
const remediesData = {
    "stomach ache": [
        { name: "Peppermint", usage: "Can help with nausea, cramps, and spasms. Try peppermint tea, gum, or candy." },
        { name: "Ginger", usage: "Helps with nausea, vomiting, and upset stomach. Try ginger tea or supplements." },
        { name: "Chamomile", usage: "Soothes upset stomach and reduces cramps. Drink chamomile tea." },
        { name: "Cinnamon", usage: "Reduces bloating and gas. Use in teas or warm water." },
        { name: "Lemon", usage: "Stimulates digestion. Add lemon to water or tea." },
        { name: "Licorice", usage: "Prevents and treats ulcers. Try licorice tea or capsules." },
        { name: "Cayenne Pepper", usage: "Fights infections and reduces ulcers. Use sparingly in food or tea." },
        { name: "Rosemary", usage: "Adjusts gut bacteria composition. Add to meals or teas." },
        { name: "Garlic", usage: "Contains prebiotic fiber for gut health. Use raw or cooked in meals." },
        { name: "Apply Heat", usage: "Try putting a heating pad or hot towel on your abdomen. The heat can help relax the muscles and relieve cramping. Taking a hot shower or bath with Epsom salts may also help."},
        { name: "Note", usage: "You can also try drinking soda water to help release gas, or taking apple cider vinegar to neutralize an upset stomach. You should seek medical attention if you experience chronic or severe abdominal pain, bloody or black stool, unexplained weight loss, signs of dehydration, or trouble breathing."},
    ],
    "headache": [
        { name: "Peppermint", usage: "Apply peppermint oil on temples or drink peppermint tea." },
        { name: "Lavender", usage: "Reduces stress headaches. Inhale lavender oil or use in a diffuser." },
        { name: "Ginger", usage: "Eases migraines. Try ginger tea or supplements." },
        { name: "Feverfew", usage: "May reduce migraine frequency. Try capsules or tea." },
       
    
    ],
    "stuffy nose": [
        { name: "Eucalyptus", usage: "Clears nasal passages. Use eucalyptus oil in steam inhalation." },
        { name: "Peppermint", usage: "Relieves congestion. Inhale peppermint oil or drink tea." },
        { name: "Ginger", usage: "Reduces inflammation. Try ginger tea." },
        { name: "Thyme", usage: "Antimicrobial for respiratory health. Drink thyme tea or inhale oil." }
    ],
    // Add more symptoms and remedies as needed

    */