//const Remedy = require('../models/remedy');

const Remedy = require('./remedy'); // './' points to the current folder
const herbsData = require('./herbsData'); // Adjust the path relative to routes.js
const Favorite = require('./favorites');



 


module.exports = function (app, passport) {
    // Home route
    app.get('/', (req, res) => {
        res.render('index');
    });

    // Signup route
    app.get('/signup', (req, res) => {
        res.render('signup');
    });

    //  signup
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    //  login
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/',
        failureFlash: true
    }));






// profile


    app.get('/profile', isLoggedIn, async (req, res) => {
        try {
            const userFavorites = await Remedy.find({ favoritedBy: req.user._id });
            const remedies = await Remedy.find(); // Fetch all remedies or based on a symptom
            const symptom = req.query.symptom || '';
            res.render('profile', { user: req.user, remedies, symptom, favorites: userFavorites });
        } catch (err) {
            console.error('Error fetching profile:', err);
            res.status(500).send('Error loading profile');
        }
    });
    

    





    // Fetch remedies based on user input (API route)
    app.get('/api/remedies', async (req, res) => {
        const { symptom } = req.query; // Get symptom from query string
        console.log('Symptom received:', symptom); // Debugging log
    
        try {
            // Find remedies based on symptom (case-insensitive)
            const remediesData = await Remedy.find({ symptom: { $regex: symptom, $options: 'i' } });
    
            if (!remediesData || remediesData.length === 0) {
                console.log('No remedies found for symptom:', symptom);
                return res.status(404).json({ message: 'No remedies found for this symptom.' });
            }
    
            console.log('Remedies found:', remediesData);
    
            // Flatten remedies arrays if remediesData contains multiple matching documents
            const remedies = remediesData.map((doc) => doc.remedies).flat();
    
            // Send the remedies array back as a JSON response
            res.json(remedies);
        } catch (err) {
            console.error('Error fetching remedies:', err);
            res.status(500).send('Error fetching remedies');
        }
    });
    


// herbs data





    // Herbs page route
    app.get('/herbs', (req, res) => {
        res.render('herbs'); // Render the herbs.ejs page
    });

    // API route for fetching herbs by category
    app.get('/api/herbs', (req, res) => {
        const category = req.query.category;
        if (herbsData[category]) {
            res.json(herbsData[category]); // Return herbs for the selected category
        } else {
            res.status(404).json({ message: 'Category not found.' });
        }
    });

   






 // Pin a herb
 app.post("/favorites", async (req, res) => {
    try {
        const { name, usage } = req.body;

        // Create a new favorite entry for the logged-in user
        const favorite = new Favorite({
            userId: req.user._id, // Ensure `req.user` is populated via session or auth middleware
            name,
            usage,
        });

        await favorite.save();
        res.status(201).json({ success: true, message: `${name} added to favorites!` });
    } catch (err) {
        console.error("Error saving favorite:", err);
        res.status(500).json({ success: false, error: "Failed to add to favorites." });
    }
});





app.get("/favorites", async (req, res) => {
    try {
        const favorites = await Favorite.find({ userId: req.user._id });
        res.render("favorites", { favorites });
    } catch (err) {
        console.error("Error fetching favorites:", err);
        res.status(500).send("Failed to load favorites.");
    }
});


app.delete('/favorites/:id', async (req, res) => {
    try {
      console.log('Delete request received for ID:', req.params.id);
      const deletedFavorite = await Favorite.findByIdAndDelete(req.params.id);
      if (!deletedFavorite) {
        console.error('Favorite not found');
        return res.status(404).send('Favorite not found');
      }
      console.log('Deleted Favorite:', deletedFavorite);
      res.redirect('/favorites'); // Redirect to favorites page
    } catch (err) {
      console.error('Error removing favorite:', err);
      res.status(500).send('Failed to remove favorite.');
    }
  });
  




























































// Logout route



    
    app.post('/logout', (req, res) => {
        const userId = req.user._id;  // Assuming user is logged in
        const remedyId = req.body.remedyId;

        app.get('/logout', (req, res) => {
            req.favorites(() => {
                console.log('user is logged out');
            });
            res.redirect('/');
        });

    });



    
    app.get('/logout', (req, res) => {
        req.logout(() => {
            console.log('User logged out');
        });
        res.redirect('/');
    });

    // Middleware to check if user is logged in
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/');
    }


};




