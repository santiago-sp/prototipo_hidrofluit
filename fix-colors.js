import fs from 'fs';

let app = fs.readFileSync('src/App.tsx', 'utf8');

// 1. In the Navbar, we want text to switch color based on scrolled (so it is white on transparent, and primary on white bg)awdw
app = app.replace(
  'text-[20px] font-extrabold tracking-tight text-white block',
  'text-[20px] font-extrabold tracking-tight ${scrolled ? "text-primary" : "text-white"} block'
);

app = app.replace(
  /'text-white\/75 hover:text-white'/g,
  '`${scrolled ? "text-primary/75 hover:text-primary" : "text-white/75 hover:text-white"}`'
);

// Menu icon color
app = app.replace(
  'className="p-2 text-white"',
  'className={`p-2 ${scrolled ? "text-primary" : "text-white"}`}'
);

// Mobile Menu bg and text
app = app.replace(
  `fixed inset-0 top-[68px] bg-bg z-[90]`,
  `fixed inset-0 top-[68px] bg-bg shadow-xl z-[90]`
);
app = app.replace(
  /\? \x27text-accent\x27\n\s*: \x27text-white\x27/g,
  `? 'text-accent' : (scrolled ? 'text-primary' : 'text-white')`
);

// Make the nav text changes to JSX proper format
app = app.replace(
  /<span className="text-\[20px\] font-extrabold tracking-tight \$\{scrolled \? "text-primary" : "text-white"\} block">HIDROFLUID<\/span>/,
  '<span className={`text-[20px] font-extrabold tracking-tight block ${scrolled ? "text-primary" : "text-white"}`}>HIDROFLUID</span>'
);

// 2. Sections 3 onwards need to not have text-white
// We will replace text-white with text-primary ONLY after line 390 (Marquee Section)
const parts = app.split('Marquee Section');
if (parts.length === 2) {
  let rest = parts[1];
  
  // Also we must be careful with text-white in buttons.
  // We can do a regex that replaces text-white with text-primary EXCEPT when it's part of a button or has bg-primary.
  // Or simpler: change default text-white to text-[#1A3A6E] -> wait, we can just replace text-white with text-primary, 
  // but let's restore it in primary buttons: bg-primary... text-primary -> text-white

  rest = rest.replace(/text-white/g, 'text-primary');
  
  // Revert for primary buttons which have white text
  rest = rest.replace(/bg-primary hover:bg-accent text-primary/g, 'bg-primary hover:bg-accent text-white');
  rest = rest.replace(/bg-primary text-primary/g, 'bg-primary text-white');
  rest = rest.replace(/hover:text-primary/g, 'hover:text-accent');
  
  // The border-white/5 for cards on a light background should turn into border-primary/10 or border-gray/20
  rest = rest.replace(/border-white\/5/g, 'border-gray/20');
  rest = rest.replace(/border-white\/10/g, 'border-gray/30');
  
  // For the Projects absolute gradient
  rest = rest.replace(/from-bg via-transparent to-transparent opacity-60/g, 'from-gray/80 via-transparent to-transparent opacity-30');

  // bg-bg-card should remain, it's mapped to white.
  // text-white/30 in marquee
  rest = rest.replace(/text-primary\/30/g, 'text-primary/60');
  rest = rest.replace(/text-primary\/15/g, 'text-primary/40');
  
  // SectionTitle component text-white -> text-primary
  // Wait, SectionTitle is define at line 144, before Marquee.
  app = parts[0] + 'Marquee Section' + rest;
}

// And fix the SectionTitle definition which uses text-white
app = app.replace(
  'h2 className="text-[38px] font-extrabold text-white mb-6"',
  'h2 className="text-[38px] font-extrabold text-primary mb-6"'
);
app = app.replace(
  'h2 className="text-[38px] font-extrabold text-white mb-6"',
  'h2 className="text-[38px] font-extrabold text-primary mb-6"'
);

// The hero transition gradient from-bg to-transparent
// since bg is now white, it would be a white gradient fading into the dark hero!
app = app.replace(
  'bg-gradient-to-t from-bg to-transparent',
  'bg-gradient-to-t from-[#0A0F1A] to-transparent'
);

// In the Hero section, keep the text white
// But h1 is globally text-primary now from index.css.
// Actually, I changed the global index.css `h1... {@apply text-primary}`
// so the hero section h1 will be primary unless we add text-white back to it.
app = app.replace(
  '<h1 className="text-[38px] md:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight">',
  '<h1 className="text-[38px] md:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight" style={{color: "white"}}>'
);

fs.writeFileSync('src/App.tsx', app);
console.log('Done modifying App.tsx');
