const Remedy = require('../models/remedy');

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
    

    


    // Favorites route
   /* app.get('/favorites', isLoggedIn, async (req, res) => {
        try {
            const userFavorites = await Remedy.find({ favoritedBy: req.user._id });
            res.render('favorites', { favorites: userFavorites });
        } catch (err) {
            console.error('Error fetching favorites:', err);
            res.status(500).send('Error loading favorites');
        }
    });

*/


    // Fetch remedies based on user input (API route)
    app.get('/api/remedies', async (req, res) => {
        const { symptom } = req.query;
        console.log('Symptom received:', symptom);
    
        try {
            const remedies = await Remedy.find({ symptom: new RegExp(`^${symptom}$`, 'i') }); // Case-insensitive search
            console.log('Remedies found:', remedies); 
            res.json(remedies);
        } catch (err) {
            console.error('Error fetching remedies:', err);
            res.status(500).send('Error fetching remedies');
        }
    });
    






















// commenting this out, this incomplete but I want to be able to pin symptoms & have it go into a separate page
// route to the favorites.ejs file where users can save/delete symptoms&their remedies + add comments

  /* Add a symptom to favorites
app.post('/favorites/symptom/:symptom', isLoggedIn, async (req, res) => {
    const { symptom } = req.params;

    try {
        // Find remedies for the symptom
        const remedies = await Remedy.find({ symptom: new RegExp(`^${symptom}$`, 'i') });

        // Save the symptom and its remedies to the user's favorites
        const favoriteSymptom = {
            userId: req.user._id,
            symptom,
            remedies,
        };

        await UserFavorites.create(favoriteSymptom); // Create a new favorite symptom document
        res.redirect('/favorites');
    } catch (err) {
        console.error('Error adding favorite symptom:', err);
        res.status(500).send('Failed to add favorite symptom');
    }
});


app.get('/favorites', isLoggedIn, async (req, res) => {
    try {
        const favorites = await UserFavorites.find({ userId: req.user._id });
        res.render('favorites', { favorites });
    } catch (err) {
        console.error('Error fetching favorites:', err);
        res.status(500).send('Error loading favorites');
    }
});


app.delete('/favorites/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;

    try {
        await UserFavorites.findByIdAndDelete(id);
        res.json({ message: 'Removed from favorites' });
    } catch (err) {
        console.error('Error removing favorite symptom:', err);
        res.status(500).send('Failed to remove favorite symptom');
    }
});

*/






















    // Logout route
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
