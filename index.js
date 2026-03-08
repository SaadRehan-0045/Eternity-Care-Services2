import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory - based on your folder structure
app.set('views', join(__dirname, 'views', 'Ejs components'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Serve static files from 'public' directory
app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('BHC');
});
app.get('/benny', (req, res) => {
    res.render('benny');
});
///////////////////////////// Homepage/Landing route
// 1. Homecare route
app.get('/homecare', (req, res) => {
    res.render('Disability Care/HomeCare.ejs', {
        title: 'Homecare Services',
        message: 'Professional in-home care and support'
    });
});

// 2. Support Coordination route
app.get('/support-coordination', (req, res) => {
    res.render('Disability Care/Support Coordination', {
        title: 'Support Coordination',
        message: 'Expert guidance to navigate your NDIS plan'
    });
});

// 3. Community Access route
app.get('/community-access', (req, res) => {
    res.render('Disability Care/Community Access', {
        title: 'Community Access',
        message: 'Engaging community participation and social activities'
    });
});

// 4. Day Program route
app.get('/day-program', (req, res) => {
    res.render('Disability Care/Day Program', {
        title: 'Day Programs',
        message: 'Structured daily activities and skill development'
    });
});

// 5. Disability Transport route (first instance)
app.get('/disability-transport', (req, res) => {
    res.render('Disability Care/Disability Transport', {
        title: 'Disability Transport Services',
        message: 'Safe and reliable transport solutions'
    });
});

// 6. ACCOMMODATOR SIL & SDA route
app.get('/accommodation-sil-sda', (req, res) => {
    res.render('Disability Care/Accommodation SIL & SDA', {
        title: 'Accommodation SIL & SDA',
        message: 'Specialist disability accommodation and supported independent living'
    });
});

// 7. Disability Transport route (second instance - you might want to merge with the first one)
app.get('/disability-transport-services', (req, res) => {
    res.render('Disability Care/Disability Transport', {
        title: 'Disability Transport',
        message: 'Comprehensive transport services for participants'
    });
});



app.get('/mental-health-care', (req, res) => {
    res.render('Disability Care/Mental Health Care', {
        title: 'Mental Health Care',
        message: 'Specialised support for emotional and psychological wellbeing'
    });
});

app.get('/community-nursing', (req, res) => {
    res.render('Disability Care/Community Nursing', {
        title: 'Community Nursing',
        message: 'Professional nursing care in the comfort of your home'
    });
});

////////////////////////////////AGED CARE


// 1. Pricing & Planning route
app.get('/pricing-planning', (req, res) => {
    res.render('Aged Care/Pricing and Plans', {
        title: 'Pricing & Planning',
        message: 'Transparent pricing and personalized care planning'
    });
});

// 2. Support at Home route
app.get('/support-at-home', (req, res) => {
    res.render('Aged Care/Support at Home', {
        title: 'Support at Home',
        message: 'Quality care and support in the comfort of your home'
    });
});


////////////////////// / ACCOMMODATION Routes

// 1. SIL (Supported Independent Living) route
app.get('/sil', (req, res) => {
    res.render('Accomodation/SIL', {
        title: 'Supported Independent Living (SIL)',
        message: 'Independent living with personalized support'
    });
});

// 2. Respite route
app.get('/respite', (req, res) => {
    res.render('Accomodation/Respite', {
        title: 'Respite Care',
        message: 'Short-term care and support for your well-deserved break'
    });
});

// 3. BHC Farm Stay route
app.get('/bhc-farm-stay', (req, res) => {
    res.render('Accomodation/BHC Farm Stay', {
        title: 'BHC Farm Stay',
        message: 'Therapeutic farm stay experience'
    });
});

// 4. Post Hospital route
app.get('/post-hospital', (req, res) => {
    res.render('Accomodation/Post Hospital', {
        title: 'Post Hospital Care',
        message: 'Recovery and support after hospital discharge'
    });
});

// 5. SDA (Specialist Disability Accommodation) route
app.get('/sda', (req, res) => {
    res.render('Accomodation/SDA', {
        title: 'Specialist Disability Accommodation (SDA)',
        message: 'Specialized housing solutions designed for your needs'
    });
});

///////////////////// About Routes

// 1. Our Story route
app.get('/our-story', (req, res) => {
    res.render('About/Our Story', {
        title: 'Our Story',
        message: 'The journey behind our care and commitment'
    });
});

// 2. Our Team route
app.get('/our-team', (req, res) => {
    res.render('About/Our Team', {
        title: 'Our Team',
        message: 'Meet our dedicated professionals'
    });
});

app.get('/feedback', (req, res) => {
    res.render('About/Feedback', {
        title: 'Feedback',
        message: 'We value your thoughts and experiences'
    });
});


// 3. Mission & Values route
app.get('/mission-values', (req, res) => {
    res.render('About/Mission & Values', {
        title: 'Mission & Values',
        message: 'Our guiding principles and commitment to care'
    });
});

///////////////////// Referral form 
app.get('/referral-foam', (req, res) => {
    res.render('Referral form/Referral form', {
        title: 'Referral Form',
        message: 'Submit a referral for our services'
    });
});


// Contact Form submission route
app.get('/contact-form', (req, res) => {
    res.render('Contact/Contact Us', {
        title: 'Contact Form',
        message: 'Send us a message'
    });
});



// Start server
app.listen(3000, () => {
    console.log("Server started successfully on port 3000");
    console.log("Views directory path:", join(__dirname, 'views', 'templates'));
});
