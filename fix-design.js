import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix 1: NavBar links
content = content.replace(
  /className=\{`text-\[13px\] font-medium uppercase tracking-\[0\.06em\] transition-colors \$\{[\s\S]*?\}\`/g,
  "className={`text-[13px] font-medium uppercase tracking-[0.06em] transition-colors ${item.name === 'PRODUCTOS' && isProductsPage ? 'text-accent' : (scrolled ? 'text-primary hover:text-highlight' : 'text-white hover:text-white/80')}`"
);

// Fix 2: Mobile menu text
content = content.replace(
  /className=\{`text-\[18px\] font-semibold text-left \$\{[\s\S]*?\}/g,
  "className={`text-[18px] font-semibold text-left ${item.name === 'PRODUCTOS' && isProductsPage ? 'text-accent' : 'text-primary'}`"
);

// Fix 3: Hero gradient. Make it explicitly dark blue so it looks good with the image and white text
content = content.replace(
  /bg-gradient-to-r from-\[#0A0F1A\]\/92 via-\[#0A0F1A\]\/75 to-\[#0A0F1A\]\/50/g,
  "bg-gradient-to-r from-[#001c36]/95 via-[#001c36]/80 to-transparent"
);
content = content.replace(
  /bg-gradient-to-t from-\[#0A0F1A\] to-transparent/g,
  "bg-gradient-to-t from-bg to-transparent"
);

// Fix 4: Marquee text colors
content = content.replace(
  /<span className="text-\[15px\] font-semibold text-primary\/60 uppercase tracking-wider">/g,
  '<span className="text-[15px] font-semibold text-primary opacity-50 uppercase tracking-wider">'
);
content = content.replace(
  /text-primary\/40/g,
  "text-primary opacity-30"
);

// Fix 5: Hero text (let's remove the style tag and use !text-white)
content = content.replace(
  /font-extrabold text-white leading-\[1.1\] tracking-tight" style=\{\{color: "white"\}\}>/g,
  'font-extrabold !text-white leading-[1.1] tracking-tight">'
);
content = content.replace(
  /flex items-center gap-3 text-white text-\[14px\] font-normal/g,
  'flex items-center gap-3 !text-white text-[14px] font-normal'
);

// Fix 6: Product Cards.
content = content.replace(
  /bg-gradient-to-br from-\[#111D2E\] to-\[#1A3050\]/g,
  "bg-gradient-to-br from-gray-100 to-gray-200"
);
content = content.replace(
  /Settings size=\{48\} className="text-accent\/50/g,
  'Settings size={48} className="text-primary opacity-20'
);
content = content.replace(
  /className="bg-bg-card rounded-xl overflow-hidden border border-gray\/20 transition-all group"/g,
  'className="bg-bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray/10 transition-all group"'
);

// Fix 7: Advantage cards 
content = content.replace(
  /className="bg-bg-card p-8 rounded-xl border border-gray\/20 transition-all duration-300 h-full flex flex-col"/g,
  'className="bg-bg-card p-8 rounded-xl border border-gray/10 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"'
);

// Fix 8: Services cards
content = content.replace(
  /className="bg-bg p-8 rounded-xl border border-gray\/20 border-l-\[3px\] border-l-accent transition-all duration-300"/g,
  'className="bg-bg-card p-8 rounded-xl shadow-md border border-gray/10 border-l-[4px] border-l-accent hover:shadow-xl transition-all duration-300"'
);

// Fix 9: Projects Cards shadows and gradients
content = content.replace(
  /className="bg-bg rounded-xl overflow-hidden border border-gray\/20 group transition-all duration-300 h-full flex flex-col"/g,
  'className="bg-bg-card rounded-xl overflow-hidden border border-gray/10 shadow-lg hover:shadow-xl group transition-all duration-300 h-full flex flex-col"'
);
content = content.replace(
  /from-gray\/80 via-transparent to-transparent opacity-30/g,
  "from-[#0A0F1A]/90 via-[#0A0F1A]/50 to-transparent opacity-80"
);

// Fix 10: The gradient background of Stats Section
content = content.replace(
  /bg-gradient-to-br from-\[#0E1B2E\] to-\[#1A3A6E\]/g,
  "bg-gradient-to-br from-primary to-highlight"
);
content = content.replace(
  /text-\[52px\] font-extrabold text-primary leading-none mb-2/g,
  'text-[52px] font-extrabold text-white leading-none mb-2'
);
content = content.replace(
  /text-\[12px\] text-gray uppercase tracking-\[0.15em\] font-normal/g,
  'text-[12px] text-white/80 uppercase tracking-[0.15em] font-medium'
);

// Write back
fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx improved design successfully.');
