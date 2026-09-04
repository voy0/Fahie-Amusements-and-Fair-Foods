#3E51A4
#FF773D
#4EED7E
#FF89E4
#35E1FF

add banner with information on front page
- corporate events
- rentals
- festivals
- fairs
- events

foods and amusements with all of the joints and pictures and description in form of placards

about us
- history, picutres, in form of a blog post

upcoming events
- cms
- date with descrition, map link
TO ACCOMODATE TO CLIENT
- ADD CLICKABLE JOINTS IN EVENT TO ADD
- ADD TIME SELECTION, SO TIME DOESNT, GET MESSED UP 
- ADD MULTIPLE DAY EVENTS

contact us 
- sending would send



<picture>
  <source media="(max-width: 600px)" srcset="/images/hero-mobile.webp" />
  
  <img src="/images/hero-desktop.webp" alt="Wesołe miasteczko nocą" />
</picture>

---

import { Picture } from 'astro:assets';
import desktopImage from '../assets/hero-desktop.jpg';
import mobileImage from '../assets/hero-mobile.jpg';

---

<Picture
src={desktopImage}
formats={['webp', 'avif']}
alt="Opis atrakcji"
widths={[600, 1200]}
sizes="(max-width: 600px) 600px, 1200px"
/>

zdjęcie na landing page loading="eager"
format webp lub avif

Fried Dough, Blooming Onion, French Fries, Gyro, Smoking Mocktails, Lemonade, High & Kiddie Striker, Duck Pond, Sno- Cones, Ice Cream

rem - font size, margin, padding
em - locally
% - vh vw


h1 {
  /* clamp(MIN, PREFERRED, MAX) */
  font-size: clamp(2rem, 5vw + 1rem, 4.5rem);
}

/* 1. Mobile Styles (Default) */
.nav-links {
  display: none; /* Hide the menu on phones, use a hamburger icon instead */
}

/* 2. Tablet/Desktop Styles */
@media (min-width: 768px) {
  .nav-links {
    display: flex; /* Show the menu when there is enough room */
    gap: 1.5rem;
  }
}





# LEGALITY

https://www.youtube.com/watch?v=gAzs794C2BU

HTTPS	🔒 Essential	ensure your URL starts with https:// (most hosts do this free).
Privacy Policy	📝 Required	Generate one and link it in the footer.
Cookie Banner	🍪 Required	Add a simple "We use cookies" banner.
Alt Text	👁️ Required	Check every <Image /> tag in your code.
Contact Form	🔞 Age Gate	Add a "Must be 18+" checkbox.
Images	📸 Owned	Ensure you own the rights to every photo.
