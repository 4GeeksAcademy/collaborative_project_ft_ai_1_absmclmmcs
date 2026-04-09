# CONTEXT: Maison Rivage

## Company Name
Maison Rivage

## Company Background and History
Maison Rivage is a contemporary French clothing house inspired by coastal life between Biarritz and Marseille. The company was founded in 1998 by two siblings, Camille and Luc Rivage, who started with a small atelier focused on premium linen shirts and tailored separates.

Major milestones:
- 1998: First atelier opened in Bordeaux.
- 2004: First flagship boutique launched in Paris (Le Marais).
- 2012: Introduced sustainable material program with certified organic cotton and recycled fibers.
- 2018: Expanded ecommerce operations across the EU.
- 2023: Released digital styling concierge and capsule drops for online-first audiences.

## Company Operations
Maison Rivage operates with a hybrid model combining in-house design and partner manufacturing.

Core operations:
- Design and product development: Paris design studio.
- Prototyping and quality control: Bordeaux atelier.
- Manufacturing partners: Portugal, France, and northern Italy.
- Central logistics: Lyon fulfillment center.
- Customer support: Multilingual team (French, English, Spanish) available by chat and email.

Sustainability operations:
- Uses audited partner factories.
- Prioritizes low-impact dyes and recyclable packaging.
- Publishes annual material sourcing and production transparency report.

## Company Locations
Primary locations:
- Headquarters: Paris, France
- Design Studio: Paris, France
- Atelier and Quality Lab: Bordeaux, France
- Logistics Hub: Lyon, France

Retail locations:
- Paris (Le Marais)
- Bordeaux (Centre Ville)
- Nice (Promenade district)
- Brussels, Belgium
- Barcelona, Spain

## Special Products and Campaigns
Special product lines:
- Rivage Atelier: Limited-run tailoring and hand-finished pieces.
- Cote Capsule: Seasonal seaside-inspired capsule collection.
- Essentials 365: Permanent core wardrobe line (shirts, trousers, knitwear).

Notable campaigns:
- "Summer in Motion": Lightweight fabrics and travel-ready silhouettes.
- "Made to Last": Focus on durability, repair service, and timeless styling.
- "City to Coast": Day-to-night looks for urban and seaside settings.

## Branding
Brand personality:
- Elegant, relaxed, confident, and modern.
- Premium but approachable.
- French craftsmanship with contemporary utility.

Tone of voice:
- Clear, refined, and editorial.
- Minimal jargon, practical product details.
- Emphasizes quality, fit, and long-term wear.

Visual direction:
- Clean layouts with generous spacing.
- Lifestyle imagery in natural light.
- Focus on texture: linen, wool, brushed cotton, and fine knits.

Logo asset path:
- assets/logo-maison-rivage.svg

## Color Palette
Primary colors:
- Ocean Navy: #11243A
- Sandstone: #D8C8B0
- Chalk White: #F6F4EF

Secondary colors:
- Olive Clay: #7A7D63
- Terracotta: #B66245
- Charcoal Ink: #2A2A2A

Functional colors:
- Success: #2F7A57
- Warning: #A8742A
- Error: #A63D3D

## Typography System
Typography goals:
- Refined and editorial, with high readability for ecommerce flows.
- Elegant contrast between expressive headlines and practical body text.
- Consistent rhythm across home, catalog, product, cart, and checkout pages.

Primary typefaces:
- Display and headings: Cormorant Garamond (serif)
	- Use for brand moments, campaign titles, and page hero headings.
	- Character: Elegant, fashion-forward, and distinctly French editorial.
- Body and interface: Source Sans 3 (sans-serif)
	- Use for product details, navigation, forms, and utility text.
	- Character: Clean, modern, and highly legible at small sizes.
- Accent and micro-labels: Space Mono (monospace, limited use)
	- Use for SKU labels, delivery windows, and subtle metadata.
	- Character: Functional precision that complements premium styling.

Type scale (desktop first):
- Display XL: 64px / 1.05 line-height / 600 weight / -0.02em tracking
- Display L: 52px / 1.08 line-height / 600 weight / -0.02em tracking
- Heading 1: 40px / 1.15 line-height / 600 weight / -0.01em tracking
- Heading 2: 32px / 1.2 line-height / 600 weight / -0.01em tracking
- Heading 3: 26px / 1.25 line-height / 600 weight / 0 tracking
- Heading 4: 22px / 1.3 line-height / 500 weight / 0 tracking
- Body L: 18px / 1.6 line-height / 400 weight / 0 tracking
- Body M: 16px / 1.6 line-height / 400 weight / 0 tracking
- Body S: 14px / 1.55 line-height / 400 weight / 0.01em tracking
- Caption: 12px / 1.45 line-height / 500 weight / 0.02em tracking

Responsive adjustments:
- Reduce Display XL to 44px on small screens.
- Reduce Heading 1 to 32px and Heading 2 to 26px on small screens.
- Keep Body M at 16px minimum for readability on product and checkout pages.

Font-weight system:
- 400: Body copy and long-form product descriptions.
- 500: Labels, buttons, and form field headings.
- 600: All headings and key promotional callouts.

Color application with typography:
- Default body text: Charcoal Ink (#2A2A2A) on Chalk White (#F6F4EF).
- Primary headings: Ocean Navy (#11243A).
- Secondary headings and supportive text: Olive Clay (#7A7D63).
- Highlights and campaign emphasis: Terracotta (#B66245), used sparingly.
- Never use Warning or Error tones for decorative heading text.

Hierarchy and usage rules:
- Limit each page to one display style and up to three heading levels.
- Keep paragraph width between 45 and 75 characters for reading comfort.
- Use sentence case for most UI labels; reserve all caps for tiny metadata labels only.
- Use accent monospace for metadata only, not for body content or CTAs.

Accessibility guidance:
- Maintain WCAG AA contrast for all text over background surfaces.
- Avoid light text over photography without a contrast overlay.
- Do not set body text below 16px in checkout and payment steps.

## Featured Product (Single Product for MVP)
Product name: Marin Linen Overshirt

Description:
The Marin Linen Overshirt is a lightweight, structured layer designed for year-round wear. Crafted from a breathable linen-cotton blend, it features a relaxed fit, corozo-style buttons, two chest pockets, and reinforced stitching at stress points. Ideal for layering over tees or knitwear, it transitions from office to weekend travel with minimal styling effort.

Key details:
- Material: 68% linen, 32% organic cotton
- Fit: Relaxed, true to size
- Available colors: Ocean Navy, Chalk White, Olive Clay
- Care: Machine wash cold, hang dry, warm iron if needed
- Image path: assets/marin-linen-overshirt.svg

## Structured Data (schema.org JSON-LD)
```json
{
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": "#organization",
			"name": "Maison Rivage",
			"description": "Contemporary French clothing house inspired by coastal life between Biarritz and Marseille.",
			"foundingDate": "1998",
			"founders": [
				{
					"@type": "Person",
					"name": "Camille Rivage"
				},
				{
					"@type": "Person",
					"name": "Luc Rivage"
				}
			],
			"logo": {
				"@type": "ImageObject",
				"contentUrl": "assets/logo-maison-rivage.svg"
			},
			"areaServed": {
				"@type": "Place",
				"name": "European Union"
			},
			"knowsLanguage": [
				"French",
				"English",
				"Spanish"
			],
			"location": [
				{
					"@type": "Place",
					"name": "Headquarters",
					"address": {
						"@type": "PostalAddress",
						"addressLocality": "Paris",
						"addressCountry": "FR"
					}
				},
				{
					"@type": "Place",
					"name": "Atelier and Quality Lab",
					"address": {
						"@type": "PostalAddress",
						"addressLocality": "Bordeaux",
						"addressCountry": "FR"
					}
				},
				{
					"@type": "Place",
					"name": "Logistics Hub",
					"address": {
						"@type": "PostalAddress",
						"addressLocality": "Lyon",
						"addressCountry": "FR"
					}
				}
			]
		},
		{
			"@type": "Product",
			"name": "Marin Linen Overshirt",
			"description": "The Marin Linen Overshirt is a lightweight, structured layer designed for year-round wear. Crafted from a breathable linen-cotton blend, it features a relaxed fit, corozo-style buttons, two chest pockets, and reinforced stitching at stress points.",
			"image": "assets/marin-linen-overshirt.svg",
			"brand": {
				"@id": "#organization"
			},
			"material": "68% linen, 32% organic cotton",
			"color": [
				"Ocean Navy",
				"Chalk White",
				"Olive Clay"
			],
			"additionalProperty": [
				{
					"@type": "PropertyValue",
					"name": "Fit",
					"value": "Relaxed, true to size"
				},
				{
					"@type": "PropertyValue",
					"name": "Care",
					"value": "Machine wash cold, hang dry, warm iron if needed"
				}
			]
		}
	]
}
```

## Delivery, Shipping, and Returns Instructions
Delivery options:
- Standard Delivery (3 to 5 business days)
- Express Delivery (1 to 2 business days)
- Store Pickup (same day where available)

Shipping rules:
- Free standard shipping on orders over EUR120.
- Flat EUR8 shipping fee for orders below EUR120.
- Express shipping fee: EUR18.
- Orders placed before 14:00 CET ship the same business day.
- Customers receive tracking by email once dispatched.

Delivery notes:
- No deliveries on Sundays or French public holidays.
- Signature may be required for high-value orders.
- Customers must verify shipping address before payment confirmation.

Returns policy:
- Return window: 30 days from delivery date.
- Products must be unworn, unwashed, and with original tags.
- Final sale and personalized items are non-returnable.
- Free exchanges for size changes (subject to stock availability).
- Refunds are processed to the original payment method within 5 to 10 business days after inspection.

Return process:
1. Open the order in the customer account.
2. Select item(s) and return reason.
3. Generate prepaid label (EU orders) or receive return instructions (non-EU orders).
4. Pack items securely and drop at carrier point.
5. Track return status in account dashboard.
