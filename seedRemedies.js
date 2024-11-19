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
            { name: "Peppermint", usage: "Apply peppermint oil on temples or drink peppermint tea." },
            { name: "Lavender", usage: "Reduces stress headaches. Inhale lavender oil or use in a diffuser." }
        ]
    }
];

// starter API - will add more remedies here!!!!





const seedRemedies = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(
            "mongodb+srv://earth2may:ZhOkk8IgTocXXoS9@homecure.yuwrp.mongodb.net/?retryWrites=true&w=majority&appName=homeCure",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Connected to MongoDB.");

        // Clear existing remedies
        await Remedy.deleteMany({});
        console.log("Old remedies deleted.");

        // Add new remedies
        for (const remedyData of remediesData) {
            for (const remedyDetail of remedyData.remedies) {
                await Remedy.create({
                    symptom: remedyData.symptom,
                    name: remedyDetail.name,
                    usage: remedyDetail.usage
                });
            }
        }
        console.log("Remedies seeded successfully!");

        // Close the connection
        mongoose.connection.close();
    } catch (err) {
        console.error("Error seeding remedies:", err);
    }
};

// Call the seed function
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