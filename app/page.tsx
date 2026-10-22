'use client'

import { ArrowRight, Headphones, Heart, Menu, Search, ShieldCheck, Sparkles, Truck, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-19%20at%202.26.50%20PM-Kjwo4smGWXKZP627liY2PPypC0iX6d.jpeg'

const heroSlides = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90',
  '/chandelier-living-room.jpg',
]

const products = [
  { name: 'Aurelia Cascade', type: 'Grand chandelier', price: 'By inquiry', image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Noir Wall Sconce', type: 'Decorative wall light', price: 'From ₹4,800', image: '/wall-lights.jpg' },
  { name: 'Vela Floor', type: 'Sculptural floor lamp', price: 'From $2,950', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Orbis Pendant', type: 'Hand-blown pendant', price: 'From $1,650', image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb54?auto=format&fit=crop&w=1000&q=85' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [liked, setLiked] = useState<number[]>([])
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [heroSlide, setHeroSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const selectCategory = (category: string) => {
    setSelectedCategory(category)
    window.requestAnimationFrame(() => document.querySelector('#featured-pieces')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  useEffect(() => {
    const timer = window.setInterval(() => setHeroSlide((current) => (current + 1) % heroSlides.length), 5500)
    return () => window.clearInterval(timer)
  }, [])

  const toggleLike = (index: number) => setLiked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="The Fifth Wall home">
          <img src={logo} alt="The Fifth Wall — Lighting Interiors Beyond" />
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#featured-pieces" onClick={() => selectCategory('all')}>Decorative Lighting</a><a href="#featured-pieces" onClick={() => selectCategory('all')}>Collections</a><a href="#story">About</a><a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button aria-label="Search" className="icon-button"><Search size={18} strokeWidth={1.25} /></button>
          <button aria-label="View wishlist" className="icon-button"><Heart size={18} strokeWidth={1.25} /></button>
          <button aria-label="Open menu" className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" style={{ backgroundImage: `url(${heroSlides[heroSlide]})` }} aria-label={`Hero interior image ${heroSlide + 1} of ${heroSlides.length}`} />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">About Us <span /></p>
          <h1>Lighting. <em>Interiors. Beyond.</em></h1>
          <p className="hero-copy">The Fifth Wall is where lighting and interiors come together to transform the way a space feels. Inspired by the ceiling—the often-overlooked Fifth Wall—our philosophy is to look beyond the ordinary and create spaces with character, warmth, and elegance. From statement lighting and architectural illumination to refined interiors and décor, every element is thoughtfully curated to bring beauty and purpose into your home. We believe great design is not just about how a space looks, but how it makes you feel. The Fifth Wall — transforming spaces into experiences.</p>
          <a className="gold-button" href="#collection">Explore collection <ArrowRight size={16} /></a>
        </div>
            </section>

      <section className="service-section" aria-label="The Fifth Wall services">
        <div className="service-item"><Truck size={38} strokeWidth={1.2} /><h3>Pan-India Delivery</h3><p>Free above ₹4,999</p></div>
        <div className="service-item"><ShieldCheck size={38} strokeWidth={1.2} /><h3>2-Year Warranty</h3><p>On all lighting</p></div>
        <div className="service-item"><Sparkles size={38} strokeWidth={1.2} /><h3>Design Help</h3><p>Free lighting plan</p></div>
        <div className="service-item"><Headphones size={38} strokeWidth={1.2} /><h3>Support</h3><p>Mon–Sat, 10:30–8</p></div>
      </section>



<section className="intro-section section-pad">
  <div className="intro-content"><div className="section-kicker">01 / The collection</div><h2>Light Every Corner <em>Beautifully.</em></h2><p>We create lighting that does more than illuminate. Each piece is a study in balance, material and atmosphere — made to become part of the architecture around it.</p><a href="#collection" className="text-link">Discover our point of view <ArrowRight size={15} /></a></div>
  </section>

      <section className="chandelier-section section-pad" id="chandeliers">
        <div className="chandelier-image"><img src="/chandelier-living-room.jpg" alt="Sculptural ring chandelier illuminating a warm contemporary living room" /></div>
        <div className="chandelier-copy"><div className="section-kicker">Chandelier collection</div><h2>Light that<br /><em>holds the room.</em></h2><p>A sculptural ring chandelier designed to bring warmth, movement, and a quiet sense of drama to contemporary interiors.</p><a className="text-link" href="#chandeliers">Explore chandeliers <ArrowRight size={15} /></a></div>
      </section>

      <section className="wall-lights-category section-pad" id="wall-lights">
        <div className="wall-lights-image"><img src="/wall-lights.jpg" alt="Ornate wall light casting patterned warmth across a textured wall" /></div>
        <div className="wall-lights-copy"><div className="section-kicker">Wall lights collection</div><h2>Warmth<br /><em>on the wall.</em></h2><p>Decorative sconces that turn everyday walls into moments of warmth, texture, and atmosphere.</p><a className="text-link" href="#collection">Explore wall lights <ArrowRight size={15} /></a></div>
      </section>

      <section className="ceiling-lights-category section-pad" id="ceiling-lights">
        <div className="ceiling-lights-copy"><div className="section-kicker">Ceiling lights collection</div><h2>Make the<br /><em>ceiling speak.</em></h2><p>Sculptural overhead lighting that creates a sense of movement, energy, and presence across the room.</p><a className="text-link" href="#collection">Explore ceiling lights <ArrowRight size={15} /></a></div>
        <div className="ceiling-lights-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-1t9OBeZe91Dp8PK7cGPLBWfj5FcofR.jpg" alt="Geometric linear ceiling light illuminating a contemporary living room" /></div>
      </section>

      <section className="featured-pieces-section section-pad" id="featured-pieces" data-category={selectedCategory}>
        <div className="featured-heading"><div><div className="section-kicker">The Fifth Wall</div><h2>{selectedCategory === 'all' ? <>The Fifth <em>Wall</em></> : <>{selectedCategory.replace('-', ' ')} <em>collection</em></>}</h2><span className="featured-rule" /></div><a className="collection-explore" href="#featured-pieces" onClick={() => selectCategory('all')} aria-label="Explore all collections"><span>Explore all collection</span><span className="collection-explore-icon" aria-hidden="true"><ArrowRight size={14} /></span></a></div>
        <div className="featured-pieces-grid">
          <article className="featured-piece" data-category="ceiling-lights"><img src="/featured-ceiling-ring.jpg" alt="Halo Drift sculptural ceiling light" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Halo Drift</h3><strong>₹24,800</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="wall-lights"><img src="/featured-bronze-lantern.jpg" alt="Heritage Crest bronze wall lantern" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Heritage Crest</h3><strong>₹8,900</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="wall-lights"><img src="/featured-botanical-sconce.jpg" alt="Botanica Glow double globe wall sconce" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Botanica Glow</h3><strong>₹12,600</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="ceiling-lights"><img src="/featured-ring-pendant.jpg" alt="Oro Loop three ring pendant light" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Oro Loop</h3><strong>₹19,750</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="chandeliers"><img src="/featured-galaxy-chandelier.jpg" alt="Galaxy Arc modern chandelier" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Galaxy Arc</h3><strong>₹31,500</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="chandeliers"><img src="/featured-disc-chandelier.jpg" alt="Luna Stack layered disc chandelier" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Luna Stack</h3><strong>₹28,400</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="wall-lights"><img src="/featured-led-wall.jpg" alt="Sculptural LED feature wall with illuminated tree motif" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Arbor Halo</h3><strong>₹42,800</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="wall-lights"><img src="/featured-moon-wall.jpg" alt="Moon-inspired illuminated circular wall installation" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Moon Mosaic</h3><strong>₹21,900</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="ceiling-lights"><img src="/featured-crystal-pendants.jpg" alt="Three crystal pendant lights with warm illumination" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Crystal Trio</h3><strong>₹16,750</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="furniture"><img src="/featured-geometric-art.jpg" alt="Geometric botanical wall art installation in a modern interior" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Terra Geometry</h3><strong>₹34,600</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="wall-lights"><img src="/featured-double-sconce.jpg" alt="Gold double-arm wall sconce with pleated cream shades" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Gilded Duet</h3><strong>₹14,800</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="wall-lights"><img src="/featured-beam-sconce.jpg" alt="Black wall sconce casting warm symmetrical beams" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Beam Noir</h3><strong>₹7,950</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="chandeliers"><img src="/featured-artistic-loop.jpg" alt="Sculptural golden loop pendant lights suspended in a modern living room" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Orbit Sculpt</h3><strong>₹27,600</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="floor-lamps"><img src="/floor-lamp-tripod.jpg" alt="Warm tripod floor lamp beside a sofa and indoor plants" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Tripod Glow</h3><strong>₹18,900</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="floor-lamps"><img src="/floor-lamp-wood-tripod.jpg" alt="Minimal wooden tripod floor lamp with a charcoal shade" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Oak Silhouette</h3><strong>₹22,500</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="floor-lamps"><img src="/floor-lamp-sculptural.jpg" alt="Sculptural twisted wood floor lamp with warm illumination" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Twist Ember</h3><strong>₹26,800</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="ceiling-lights"><img src="/ceiling-light-starburst.jpg" alt="Gold starburst ceiling light with glowing white rods in a living room" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Solaris Burst</h3><strong>₹32,500</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="ceiling-lights"><img src="/ceiling-light-floral.jpg" alt="Floral-shaped LED ceiling light in a modern living room" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Bloom Halo</h3><strong>₹28,900</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="ceiling-lights"><img src="/ceiling-light-geometric.jpg" alt="Modern gold geometric loop ceiling light above a sofa" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Contour Loop</h3><strong>₹24,750</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="chandeliers"><img src="/chandelier-sculptural.jpg" alt="Flowing sculptural chandelier suspended in a grand wood-paneled lobby" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Cloud Current</h3><strong>₹68,500</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="chandeliers"><img src="/chandelier-spiral.jpg" alt="Dark bronze spiral chandelier glowing above a modern living room" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Spiral Nocturne</h3><strong>₹54,900</strong><button type="button">Add to cart</button></div></article>
          <article className="featured-piece" data-category="chandeliers"><img src="/chandelier-crystal.jpg" alt="Ornate antique-gold crystal chandelier with multiple arms" /><div className="featured-piece-info"><span>The Fifth Wall</span><h3>Gilded Heirloom</h3><strong>₹72,800</strong><button type="button">Add to cart</button></div></article>
        </div>
      </section>

      <section className="collection-section section-pad" id="collection">
        <div className="collection-mobile-header"><div className="section-kicker">The Fifth Wall</div><h2>Top <em>collections.</em></h2><p>Curated categories for spaces with atmosphere.</p></div><div className="collection-desktop-heading"><div className="section-kicker">The Fifth Wall</div><h2>Top <em>collections.</em></h2><p>Curated categories for spaces with atmosphere.</p></div>
        <div className="collection-category-grid">
          <a className="collection-category-card" href="#featured-pieces" onClick={() => selectCategory('wall-lights')}><img src="/wall-lights.jpg" alt="Decorative wall light" /><div><h3>Wall lights</h3><p>Wall sconces, picture lights and mirror lights.</p></div></a>
          <a className="collection-category-card" href="#featured-pieces" onClick={() => selectCategory('ceiling-lights')}><img src="/ceiling-lights.jpg" alt="Warm brass flush-mount ceiling spotlights in a minimalist hallway" /><div><h3>Ceiling lights</h3><p>Pendants, chandeliers and architectural fixtures.</p></div></a>
          <a className="collection-category-card" href="#featured-pieces" onClick={() => selectCategory('chandeliers')}><img src="/chandelier-living-room.jpg" alt="Luxury chandelier glowing above an elegant living room" /><div><h3>Chandeliers</h3><p>Crystal and modern sculptural centerpiece fixtures.</p></div></a>
          <a className="collection-category-card" href="#featured-pieces" onClick={() => selectCategory('floor-lamps')}><img src="/floor-lamp-three-light.jpg" alt="Three-light floor lamp with display shelves in a cozy living room" /><div><h3>Floor lamps</h3><p>Sculptural lighting for quiet corners and reading spaces.</p></div></a>
          <a className="collection-category-card" href="#featured-pieces" onClick={() => selectCategory('lamps')}><img src="/lamp-sculptural.jpg" alt="Sculptural spiral table lamp with a warm amber glow and black base" /><div><h3>Lamps</h3><p>Table lamps, floor lamps and reading lights.</p></div></a>
          <a className="collection-category-card" href="#featured-pieces" onClick={() => selectCategory('interior-decor')}><img src="/interior-decor-living-room.jpg" alt="Moody contemporary living room with olive sectional, walnut coffee table, and warm pendant lighting" /><div><h3>Interior decor</h3><p>Mirrors, objects and finishing touches.</p></div></a>
          <a className="collection-category-card" href="#featured-pieces" onClick={() => selectCategory('furniture')}><img src="/furniture.jpg" alt="Contemporary walnut dining table with four leather chairs" /><div><h3>Furniture</h3><p>Consoles, chairs and considered living pieces.</p></div></a>
        </div>
      </section>

      <section className="story-section" id="story"><div className="story-image"><img src="/about-us.jpg" alt="Luxury living room with sculptural wood lighting, fireplace, and mountain views" /></div><div className="story-content"><div className="section-kicker">03 / About Us</div><h2>Lighting.<br /><em>Interiors. Beyond.</em></h2><p>The Fifth Wall is where lighting and interiors come together to transform the way a space feels.</p><p>Inspired by the ceiling—the often-overlooked Fifth Wall—our philosophy is to look beyond the ordinary and create spaces with character, warmth, and elegance.</p><p>From statement lighting and architectural illumination to refined interiors and décor, every element is thoughtfully curated to bring beauty and purpose into your home.</p><p>We believe great design is not just about how a space looks, but how it makes you feel.</p><p>The Fifth Wall — transforming spaces into experiences.</p><a className="text-link" href="#contact">Read our story <ArrowRight size={15} /></a></div></section>


      <section className="contact-section" id="contact"><div className="contact-inner"><div className="section-kicker">05 / Begin a conversation</div><h2>Let&apos;s make<br /><em>space for light.</em></h2><a className="gold-button" href="mailto:studio@thefifthwall.in">Work with us <ArrowRight size={16} /></a></div><div className="contact-mark">TFW</div></section>

      <footer className="site-footer">
        <div className="footer-notice">FREE SHIPPING ACROSS INDIA ON ORDERS ABOVE ₹4,999</div>
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="The Fifth Wall" />
            <p>Decorative lighting, fans and interior pieces curated for Indian homes.</p>
          </div>
          <div className="footer-section">
            <h4>SHOP</h4>
            <ul>
              <li><a href="#collection">Chandeliers</a></li>
              <li><a href="#collection">Ceiling Lights</a></li>
              <li><a href="#collection">Wall Lights</a></li>
              <li><a href="#collection">Outdoor Lights</a></li>
              <li><a href="#collection">Fans</a></li>
              <li><a href="#featured-pieces" onClick={() => selectCategory('lamps')}>Lamps</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#story">About us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#featured-pieces" onClick={() => selectCategory('all')}>All products</a></li>
              <li><a href="#contact">Track my orders</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>HELP</h4>
            <ul>
              <li><a href="#contact">FAQ</a></li>
              <li><a href="#contact">Return & refund policy</a></li>
              <li><a href="#contact">Terms & conditions</a></li>
              <li><a href="#contact">Privacy policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>VISIT</h4>
            <p>The Fifth Wall Showroom<br />1/803, Sector 1, Gomti<br />Nagar Vistar<br />Lucknow</p>
            <p className="footer-hours">Mon – Sat, 10:30 am – 8:00 pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 The Fifth Wall</span>
          <span>Made for the extraordinary</span>
          <span>Lucknow · India</span>
        </div>
      </footer>
    </main>
  )
}
