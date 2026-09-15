# OCHA Humanitarian Icons — Reference & Context

> A knowledge document for AI assistants (Claude Cowork, Claude Code, etc.) to understand the OCHA Humanitarian Icons project: where it lives, how it's structured, the full icon inventory, and naming conventions. This file is generated from `metadata.json` — regenerate it if the icon set changes.

## What this project is

The official OCHA Humanitarian Icons — a set of single-colour SVG icons in OCHA blue (`#009edb`) used across OCHA products, publications, and digital platforms. Maintained by the OCHA Brand and Design Unit (BDU). Licensed CC BY 4.0.

**389 icons** across **19 families**. **91** are approved for use in wordmarks.

## Where it lives

| Location | Path / URL |
|---|---|
| **GitHub repo** | https://github.com/UN-OCHA/humanitarian-icons-2026-BDU |
| **Local working copy** | `/Users/javiercuetoocha/OCHA DMU Dropbox/Javier Cueto/Design/Humanitarian_Icons/v2/Humanitarian_Icons_2026/humanitarian-icons-2026` |
| **Live tools (GitHub Pages)** | https://un-ocha.github.io/humanitarian-icons-2026-BDU/ |
| **Frontify icon library** | https://brand.unocha.org/brands/168519/icon-libraries/251023 |
| **Font Awesome (2021 collaboration)** | https://fontawesome.com/icons/categories/humanitarian |

## Repo structure

```
humanitarian-icons-2026-BDU/
├── svg/                      # All icon SVGs (one file per icon)
├── metadata.json             # Icon metadata: names, families, wordmark flags, font codepoints
├── tags.json                 # Visual concept tags per icon (for search/AI discovery)
├── README.md                 # Public readme with visual icon library
├── curator/                  # Browser tools (icon curator, tags curator)
├── word-mark-generator/      # Wordmark generator web app + approval backend
├── scripts/                  # Python generators (Excel, PPTX, font, grid, wordmarks)
├── output/                   # Pre-built exports (xlsx, pptx, csv, svg grid, icon font)
└── assets/                   # OCHA logo, favicon
```

## How to use an icon

**File:** `svg/{Icon-name}.svg` (exact filenames listed below).

**CDN (jsDelivr):**
```
https://cdn.jsdelivr.net/gh/UN-OCHA/humanitarian-icons-2026-BDU@main/svg/{Icon-name}.svg
```
**GitHub Pages:**
```
https://un-ocha.github.io/humanitarian-icons-2026-BDU/svg/{Icon-name}.svg
```

## Naming conventions

- Filenames use **Hyphen-Case** with a leading capital: `Water-source.svg`, `Health-facility.svg`.
- The display `name` in metadata is sentence case: `Water source`, `Health facility`.
- Some icons have damage-state variants: `-affected`, `-destroyed`, `-not-affected` (e.g. `Bridge-affected`).
- Some concepts have alternate versions with a `-2` suffix (e.g. `People-targeted-2`).
- All SVGs are monochrome, `fill` = OCHA blue `#009edb`.

## Full icon inventory (by family)

Legend: **✎** = approved for wordmarks.

### Activities strategy (35)

- `Advocacy.svg` — Advocacy
- `Agile.svg` — Agile
- `Analysis.svg` — Analysis
- `Assessment.svg` — Assessment
- `Cash-transfer.svg` — Cash transfer
- `Civil-military-coordination.svg` — Civil military coordination
- `Community-engagement.svg` — Community engagement
- `Coordinated-assessment.svg` — Coordinated assessment
- `Deployment.svg` — Deployment
- `Financing.svg` — Financing
- `Fund.svg` — Fund
- `Gap-analysis.svg` — Gap analysis
- `Humanitarian-programme-cycle.svg` — Humanitarian programme cycle
- `Information-management.svg` — Information management
- `Information-technology.svg` — Information technology
- `Innovation.svg` — Innovation
- `Leadership.svg` — Leadership
- `Learning.svg` — Learning
- `Meeting.svg` — Meeting
- `Monitoring.svg` — Monitoring
- `Needs-assessment.svg` — Needs assessment
- `Partnership.svg` — Partnership
- `Policy.svg` — Policy
- `Preparedness.svg` — Preparedness
- `Public-information.svg` — Public information
- `Reporting.svg` — Reporting
- `Response.svg` — Response
- `Scale-down-operation.svg` — Scale down operation
- `Scale-up-operation.svg` — Scale up operation
- `Search-and-rescue.svg` — Search and rescue
- `Services-and-tools.svg` — Services and tools
- `Sexual-and-reproductive-health.svg` — Sexual and reproductive health
- `Staff-management.svg` — Staff management
- `Top-ranking.svg` — Top ranking
- `Training.svg` — Training

### Camp (6)

- `IDP-refugee-camp.svg` — IDP refugee camp ✎
- `Permanent-camp.svg` — Permanent camp
- `Registration.svg` — Registration
- `Spontaneous-site.svg` — Spontaneous site
- `Temporary-camp.svg` — Temporary camp
- `Transition-site.svg` — Transition site

### Clusters (11)

- `Camp-coordination-and-camp-management.svg` — Camp coordination and camp management
- `Early-recovery.svg` — Early recovery
- `Education.svg` — Education ✎
- `Emergency-telecommunications.svg` — Emergency telecommunications
- `Food-security.svg` — Food security
- `Health.svg` — Health ✎
- `Logistics.svg` — Logistics ✎
- `Nutrition.svg` — Nutrition ✎
- `Protection.svg` — Protection ✎
- `Shelter.svg` — Shelter ✎
- `Water-sanitation-and-hygiene.svg` — Water sanitation and hygiene

### Damage (30)

- `Airport-affected.svg` — Airport affected
- `Airport-destroyed.svg` — Airport destroyed
- `Airport-not-affected.svg` — Airport not affected
- `Bridge-affected.svg` — Bridge affected
- `Bridge-destroyed.svg` — Bridge destroyed
- `Bridge-not-affected.svg` — Bridge not affected
- `Building-facility-affected.svg` — Building facility affected
- `Building-facility-destroyed.svg` — Building facility destroyed
- `Building-facility-not-affected.svg` — Building facility not affected
- `Damaged-affected.svg` — Damaged affected
- `Destroyed.svg` — Destroyed
- `Health-facility-affected.svg` — Health facility affected
- `Health-facility-destroyed.svg` — Health facility destroyed
- `Health-facility-not-affected.svg` — Health facility not affected
- `House-affected.svg` — House affected
- `House-destroyed.svg` — House destroyed
- `House-not-affected.svg` — House not affected
- `Not-affected.svg` — Not affected
- `Port-affected.svg` — Port affected
- `Port-destroyed.svg` — Port destroyed
- `Port-not-affected.svg` — Port not affected
- `Power-electricity-affected.svg` — Power electricity affected
- `Power-electricity-not-affected.svg` — Power electricity not affected
- `Power-outage.svg` — Power outage
- `Road-affected.svg` — Road affected
- `Road-destroyed.svg` — Road destroyed
- `Road-not-affected.svg` — Road not affected
- `School-affected.svg` — School affected
- `School-destroyed.svg` — School destroyed
- `School-not-affected.svg` — School not affected

### Disasters, hazards and crises (32)

- `Anticipatory-action.svg` — Anticipatory action ✎
- `Cold-wave.svg` — Cold wave ✎
- `Conflict.svg` — Conflict ✎
- `Cyclone.svg` — Cyclone ✎
- `Drought.svg` — Drought ✎
- `Earthquake.svg` — Earthquake ✎
- `Epidemic.svg` — Epidemic ✎
- `Famine.svg` — Famine ✎
- `Fire.svg` — Fire ✎
- `Flash-flood.svg` — Flash flood ✎
- `Flood.svg` — Flood ✎
- `Heatwave.svg` — Heatwave ✎
- `Heavy-rain.svg` — Heavy rain ✎
- `Humanitarian-access.svg` — Humanitarian access ✎
- `Insect-infestation.svg` — Insect infestation ✎
- `Internally-displaced.svg` — Internally displaced ✎
- `Landslide-mudslide.svg` — Landslide mudslide ✎
- `Locust-infestation.svg` — Locust infestation ✎
- `Population-return.svg` — Population return ✎
- `Poverty.svg` — Poverty ✎
- `Refugee.svg` — Refugee ✎
- `Resilience.svg` — Resilience ✎
- `Snow-avalanche.svg` — Snow avalanche ✎
- `Snowfall.svg` — Snowfall ✎
- `Storm.svg` — Storm ✎
- `Storm-surge.svg` — Storm surge ✎
- `Technological-disaster.svg` — Technological disaster ✎
- `Tornado.svg` — Tornado ✎
- `Tsunami.svg` — Tsunami ✎
- `Violent-wind.svg` — Violent wind ✎
- `Volcano.svg` — Volcano ✎
- `Worm-infestation.svg` — Worm infestation

### Food and non-food items (25)

- `Blanket.svg` — Blanket
- `Bottled-water.svg` — Bottled water
- `Bucket.svg` — Bucket
- `Clothing.svg` — Clothing
- `Detergent.svg` — Detergent
- `Flour.svg` — Flour
- `Food.svg` — Food
- `Kitchen-set.svg` — Kitchen set
- `Mattress.svg` — Mattress
- `Medical-supply.svg` — Medical supply
- `Medicine.svg` — Medicine
- `Mosquito-net.svg` — Mosquito net
- `Non-food-items.svg` — Non food items
- `Non-food-items-2.svg` — Non food items 2
- `Oil.svg` — Oil
- `Plastic-sheeting.svg` — Plastic sheeting
- `Relief-goods.svg` — Relief goods
- `Rice.svg` — Rice
- `Salt.svg` — Salt
- `Soap.svg` — Soap
- `Stove.svg` — Stove
- `Sugar.svg` — Sugar
- `Tarpaulin.svg` — Tarpaulin
- `Tent.svg` — Tent
- `Vaccine.svg` — Vaccine

### General infrastructure (28)

- `Assembly-point.svg` — Assembly point ✎
- `Buddhist-temple.svg` — Buddhist temple ✎
- `Building.svg` — Building ✎
- `Church.svg` — Church ✎
- `Clinic.svg` — Clinic ✎
- `Community-building.svg` — Community building ✎
- `Country.svg` — Country ✎
- `Diplomatic-mission.svg` — Diplomatic mission ✎
- `Distribution-site.svg` — Distribution site ✎
- `Food-warehouse.svg` — Food warehouse ✎
- `Government-office.svg` — Government office ✎
- `Health-facility.svg` — Health facility ✎
- `Health-post.svg` — Health post ✎
- `Hindu-temple.svg` — Hindu temple ✎
- `Hospital.svg` — Hospital ✎
- `Hotel.svg` — Hotel ✎
- `House.svg` — House ✎
- `Infrastructure.svg` — Infrastructure ✎
- `Market.svg` — Market ✎
- `Mobile-clinic.svg` — Mobile clinic ✎
- `Mosque.svg` — Mosque ✎
- `NGO-office.svg` — NGO office ✎
- `Oil-facility.svg` — Oil facility ✎
- `Police-station.svg` — Police station ✎
- `Power-electricity.svg` — Power electricity ✎
- `School.svg` — School ✎
- `UN-compound-office.svg` — UN compound office ✎
- `University.svg` — University ✎

### Health (19)

- `Bacteria.svg` — Bacteria
- `COVID-19.svg` — COVID-19
- `Case-management.svg` — Case management
- `Doctor.svg` — Doctor
- `Handwashing.svg` — Handwashing
- `Health-worker.svg` — Health worker
- `Hospital-bed.svg` — Hospital bed
- `Infected.svg` — Infected
- `Infection-control.svg` — Infection control
- `Laboratory.svg` — Laboratory
- `Life-saving.svg` — Life saving
- `Mask.svg` — Mask
- `Not-infected.svg` — Not infected
- `Physical-distancing.svg` — Physical distancing
- `Respiratory.svg` — Respiratory
- `Sanitizer.svg` — Sanitizer
- `Testing.svg` — Testing
- `Ventilator.svg` — Ventilator
- `Virus.svg` — Virus

### Lockdown (10)

- `Airport-closed.svg` — Airport closed
- `Border-closed.svg` — Border closed
- `Bridge-closed.svg` — Bridge closed
- `Building-closed.svg` — Building closed
- `House-lockdown.svg` — House lockdown
- `Location-lockdown.svg` — Location lockdown
- `Market-closed.svg` — Market closed
- `Port-closed.svg` — Port closed
- `Road-closed.svg` — Road closed
- `School-closed.svg` — School closed

### Logistics (17)

- `Airport.svg` — Airport
- `Airport-military.svg` — Airport military
- `Boat.svg` — Boat
- `Bridge.svg` — Bridge
- `Bus.svg` — Bus
- `Car.svg` — Car
- `Ferry.svg` — Ferry
- `Gas-station.svg` — Gas station
- `Helicopter.svg` — Helicopter
- `Helipad.svg` — Helipad
- `Port.svg` — Port
- `Road.svg` — Road
- `Ship.svg` — Ship
- `Train.svg` — Train
- `Truck.svg` — Truck
- `Tunnel.svg` — Tunnel
- `UN-vehicle.svg` — UN vehicle ✎

### Other sectors (11)

- `Agriculture.svg` — Agriculture ✎
- `Child-care-child-friendly.svg` — Child care child friendly ✎
- `Child-protection.svg` — Child protection ✎
- `Coordination.svg` — Coordination ✎
- `Environment.svg` — Environment ✎
- `Fishery.svg` — Fishery ✎
- `Logistics-and-telecommunications.svg` — Logistics and telecommunications
- `Multi-cluster-sector.svg` — Multi-cluster sector ✎
- `Rule-of-law-and-justice.svg` — Rule of law and justice ✎
- `Safety-and-security.svg` — Safety and security ✎
- `Shelter-land-and-site-coordination.svg` — Shelter, land and site coordination

### People (27)

- `Affected-population.svg` — Affected population
- `Child-combatant.svg` — Child combatant
- `Children.svg` — Children
- `Dead.svg` — Dead
- `Drowned.svg` — Drowned
- `Elderly.svg` — Elderly
- `Gender.svg` — Gender
- `Indigenous-people.svg` — Indigenous people
- `Infant.svg` — Infant
- `Injured.svg` — Injured
- `Missing.svg` — Missing
- `National-army.svg` — National army
- `Peacekeeping-force.svg` — Peacekeeping force
- `People-affected.svg` — People affected
- `People-covered.svg` — People covered
- `People-in-need.svg` — People in need
- `People-in-need-2.svg` — People in need 2
- `People-reached.svg` — People reached
- `People-targeted.svg` — People targeted
- `People-targeted-2.svg` — People targeted 2
- `People-with-physical-impairments.svg` — People with physical impairments
- `Person-1.svg` — Person 1
- `Person-2.svg` — Person 2
- `Pregnant.svg` — Pregnant
- `Rebel.svg` — Rebel
- `Resettlement.svg` — Resettlement
- `Sex.svg` — Sex

### Physical barriers (8)

- `Border-crossing.svg` — Border crossing
- `Checkpoint.svg` — Checkpoint
- `Earthmound.svg` — Earthmound
- `Military-gate.svg` — Military gate
- `Observation-tower.svg` — Observation tower
- `Physical-closure.svg` — Physical closure
- `Road-barrier.svg` — Road barrier
- `Roadblock.svg` — Roadblock

### Product type (14)

- `API.svg` — API
- `Calendar.svg` — Calendar
- `Chart.svg` — Chart
- `Data.svg` — Data
- `Document.svg` — Document
- `Film.svg` — Film
- `Live-geoservices.svg` — Live geoservices
- `Location.svg` — Location
- `Map.svg` — Map
- `P-code.svg` — P-code
- `Photo.svg` — Photo
- `Report.svg` — Report
- `Table.svg` — Table
- `Video.svg` — Video

### Security and incident (16)

- `Abduction-kidnapping.svg` — Abduction kidnapping
- `Arrest-detention.svg` — Arrest detention
- `Assault.svg` — Assault
- `Attack.svg` — Attack
- `Carjacking.svg` — Carjacking
- `Confined.svg` — Confined
- `Dangerous-area.svg` — Dangerous area
- `Forced-entry.svg` — Forced entry
- `Forced-recruitment.svg` — Forced recruitment
- `Gender-based-violence.svg` — Gender based violence
- `Harassment-intimidation.svg` — Harassment intimidation
- `House-burned.svg` — House burned
- `Mine.svg` — Mine
- `Murder.svg` — Murder
- `Robbery.svg` — Robbery
- `Sexual-violence.svg` — Sexual violence

### Socioeconomic and development (10)

- `Debris-management.svg` — Debris management ✎
- `Livelihood.svg` — Livelihood ✎
- `Livestock.svg` — Livestock ✎
- `Population-growth.svg` — Population growth ✎
- `Reconstruction.svg` — Reconstruction ✎
- `Rural.svg` — Rural ✎
- `Rural-exodus.svg` — Rural exodus ✎
- `Trade-and-market.svg` — Trade and market ✎
- `Urban.svg` — Urban ✎
- `Urban-rural.svg` — Urban rural ✎

### Telecommunications and technology (14)

- `Cell-tower.svg` — Cell tower
- `Computer.svg` — Computer
- `E-mail.svg` — E-mail
- `Fax.svg` — Fax
- `Internet.svg` — Internet
- `Laptop.svg` — Laptop
- `Mobile-phone.svg` — Mobile phone
- `Monitor.svg` — Monitor
- `Radio.svg` — Radio
- `Remote-support.svg` — Remote support
- `Satellite-dish.svg` — Satellite dish
- `Smartphone.svg` — Smartphone
- `Walkie-talkie.svg` — Walkie talkie
- `Work-from-home.svg` — Work from home

### UX UI (63)

- `AI-chat.svg` — AI chat
- `About.svg` — About
- `Add.svg` — Add
- `Add-document.svg` — Add document
- `Alert.svg` — Alert
- `Apps.svg` — Apps
- `Blog.svg` — Blog
- `Bookmark.svg` — Bookmark
- `CSV-file.svg` — CSV file
- `Chat.svg` — Chat
- `Checked-mail.svg` — Checked mail
- `Copy.svg` — Copy
- `DOCX-file.svg` — DOCX file
- `Delete-account.svg` — Delete account
- `Down.svg` — Down
- `Download.svg` — Download
- `Edit.svg` — Edit
- `Exit-cancel.svg` — Exit cancel
- `Expand-down.svg` — Expand down
- `Expand-left.svg` — Expand left
- `Expand-right.svg` — Expand right
- `Expand-up.svg` — Expand up
- `Favourite.svg` — Favourite
- `Filter.svg` — Filter
- `Folder.svg` — Folder
- `Go.svg` — Go
- `Group.svg` — Group
- `Help.svg` — Help
- `Hidden.svg` — Hidden
- `Link.svg` — Link
- `Menu.svg` — Menu
- `More-options.svg` — More options
- `Next-item.svg` — Next item
- `Not-secured.svg` — Not secured
- `Notification.svg` — Notification
- `Out-of-platform.svg` — Out of platform
- `PDF-file.svg` — PDF file
- `Password.svg` — Password
- `Pause.svg` — Pause
- `Previous-item.svg` — Previous item
- `Print.svg` — Print
- `Remove.svg` — Remove
- `Remove-document.svg` — Remove document
- `Return.svg` — Return
- `Save.svg` — Save
- `Search.svg` — Search
- `Secured.svg` — Secured
- `Security.svg` — Security
- `See.svg` — See
- `Selected.svg` — Selected
- `Settings.svg` — Settings
- `Share.svg` — Share
- `Stop.svg` — Stop
- `Time.svg` — Time
- `Trending.svg` — Trending
- `Up.svg` — Up
- `Upload.svg` — Upload
- `User.svg` — User
- `Users.svg` — Users
- `Validate-account.svg` — Validate account
- `Warning-error.svg` — Warning error
- `XLSX-file.svg` — XLSX file
- `ZIP-compressed.svg` — ZIP compressed

### Water sanitation and hygiene (13)

- `Borehole.svg` — Borehole
- `Communal-latrine.svg` — Communal latrine
- `Latrine-cabin.svg` — Latrine cabin
- `Potable-water.svg` — Potable water ✎
- `Potable-water-source.svg` — Potable water source
- `Sanitation.svg` — Sanitation
- `Shower.svg` — Shower ✎
- `Solid-waste.svg` — Solid waste
- `Spring-water.svg` — Spring water
- `Submersible-pump.svg` — Submersible pump
- `Toilet.svg` — Toilet ✎
- `Water-source.svg` — Water source ✎
- `Water-trucking.svg` — Water trucking ✎
