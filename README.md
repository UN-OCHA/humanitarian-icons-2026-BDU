# OCHA Humanitarian Icons 2026

The official set of **389 humanitarian icons** used across OCHA products, publications, and digital platforms. All icons are single-color SVGs in OCHA blue (`#009edb`), designed to work at any size from 16px to print resolution.

Maintained by the **OCHA Brand and Design Unit (BDU)**.

## Using the Icons

### Direct download

Browse the [`svg/`](svg/) folder and download individual SVG files.

### CDN (recommended for web)

Load any icon directly via jsDelivr — no download needed:

```html
<img src="https://cdn.jsdelivr.net/gh/UN-OCHA/humanitarian-icons-2026-BDU@main/svg/Shelter.svg" alt="Shelter" />
```

Pattern:
```
https://cdn.jsdelivr.net/gh/UN-OCHA/humanitarian-icons-2026-BDU@main/svg/{Icon-name}.svg
```

### GitHub Pages

All icons are also served from GitHub Pages:
```
https://un-ocha.github.io/humanitarian-icons-2026-BDU/svg/{Icon-name}.svg
```

### Pre-built exports

Ready-to-use packages in the [`output/`](output/) folder:

| File | Format | Use case |
|---|---|---|
| `Humanitarian_icons.xlsx` | Excel | Reference sheets, internal catalogues |
| `Humanitarian_icons.pptx` | PowerPoint | Presentations, slide decks |
| `Humanitarian_icons.csv` | CSV | Data integrations, lookups |
| `Humanitarian_icons_complete_library.svg` | SVG grid | Visual overview of the full set |
| `font/` | Icon font | Web and app interfaces |

### Metadata

[`metadata.json`](metadata.json) contains structured data for every icon — name, family, keywords, and wordmark eligibility:

```json
{
  "icons": {
    "Agriculture": {
      "name": "Agriculture",
      "family": "Food security",
      "keywords": ["farming", "crops"],
      "wordmark": true,
      "wordmark_valign": 0
    }
  }
}
```

### Colour

All SVGs use OCHA blue `#009edb`. To change colour, apply a CSS filter or edit the `fill` attribute.
## Icon Library

**389 icons** across 19 categories.

### Activities strategy (35)

<table><tr>
<td align="center" width="100"><img src="svg/Advocacy.svg" width="48" height="48" /><br /><sub>Advocacy</sub></td>
<td align="center" width="100"><img src="svg/Agile.svg" width="48" height="48" /><br /><sub>Agile</sub></td>
<td align="center" width="100"><img src="svg/Analysis.svg" width="48" height="48" /><br /><sub>Analysis</sub></td>
<td align="center" width="100"><img src="svg/Assessment.svg" width="48" height="48" /><br /><sub>Assessment</sub></td>
<td align="center" width="100"><img src="svg/Cash-transfer.svg" width="48" height="48" /><br /><sub>Cash transfer</sub></td>
<td align="center" width="100"><img src="svg/Civil-military-coordination.svg" width="48" height="48" /><br /><sub>Civil military coordination</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Community-engagement.svg" width="48" height="48" /><br /><sub>Community engagement</sub></td>
<td align="center" width="100"><img src="svg/Coordinated-assessment.svg" width="48" height="48" /><br /><sub>Coordinated assessment</sub></td>
<td align="center" width="100"><img src="svg/Deployment.svg" width="48" height="48" /><br /><sub>Deployment</sub></td>
<td align="center" width="100"><img src="svg/Financing.svg" width="48" height="48" /><br /><sub>Financing</sub></td>
<td align="center" width="100"><img src="svg/Fund.svg" width="48" height="48" /><br /><sub>Fund</sub></td>
<td align="center" width="100"><img src="svg/Gap-analysis.svg" width="48" height="48" /><br /><sub>Gap analysis</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Humanitarian-programme-cycle.svg" width="48" height="48" /><br /><sub>Humanitarian programme cycle</sub></td>
<td align="center" width="100"><img src="svg/Information-management.svg" width="48" height="48" /><br /><sub>Information management</sub></td>
<td align="center" width="100"><img src="svg/Information-technology.svg" width="48" height="48" /><br /><sub>Information technology</sub></td>
<td align="center" width="100"><img src="svg/Innovation.svg" width="48" height="48" /><br /><sub>Innovation</sub></td>
<td align="center" width="100"><img src="svg/Leadership.svg" width="48" height="48" /><br /><sub>Leadership</sub></td>
<td align="center" width="100"><img src="svg/Learning.svg" width="48" height="48" /><br /><sub>Learning</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Meeting.svg" width="48" height="48" /><br /><sub>Meeting</sub></td>
<td align="center" width="100"><img src="svg/Monitoring.svg" width="48" height="48" /><br /><sub>Monitoring</sub></td>
<td align="center" width="100"><img src="svg/Needs-assessment.svg" width="48" height="48" /><br /><sub>Needs assessment</sub></td>
<td align="center" width="100"><img src="svg/Partnership.svg" width="48" height="48" /><br /><sub>Partnership</sub></td>
<td align="center" width="100"><img src="svg/Policy.svg" width="48" height="48" /><br /><sub>Policy</sub></td>
<td align="center" width="100"><img src="svg/Preparedness.svg" width="48" height="48" /><br /><sub>Preparedness</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Public-information.svg" width="48" height="48" /><br /><sub>Public information</sub></td>
<td align="center" width="100"><img src="svg/Reporting.svg" width="48" height="48" /><br /><sub>Reporting</sub></td>
<td align="center" width="100"><img src="svg/Response.svg" width="48" height="48" /><br /><sub>Response</sub></td>
<td align="center" width="100"><img src="svg/Scale-down-operation.svg" width="48" height="48" /><br /><sub>Scale down operation</sub></td>
<td align="center" width="100"><img src="svg/Scale-up-operation.svg" width="48" height="48" /><br /><sub>Scale up operation</sub></td>
<td align="center" width="100"><img src="svg/Search-and-rescue.svg" width="48" height="48" /><br /><sub>Search and rescue</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Services-and-tools.svg" width="48" height="48" /><br /><sub>Services and tools</sub></td>
<td align="center" width="100"><img src="svg/Sexual-and-reproductive-health.svg" width="48" height="48" /><br /><sub>Sexual and reproductive health</sub></td>
<td align="center" width="100"><img src="svg/Staff-management.svg" width="48" height="48" /><br /><sub>Staff management</sub></td>
<td align="center" width="100"><img src="svg/Top-ranking.svg" width="48" height="48" /><br /><sub>Top ranking</sub></td>
<td align="center" width="100"><img src="svg/Training.svg" width="48" height="48" /><br /><sub>Training</sub></td>
</tr></table>

### Camp (6)

<table><tr>
<td align="center" width="100"><img src="svg/IDP-refugee-camp.svg" width="48" height="48" /><br /><sub>IDP refugee camp</sub></td>
<td align="center" width="100"><img src="svg/Permanent-camp.svg" width="48" height="48" /><br /><sub>Permanent camp</sub></td>
<td align="center" width="100"><img src="svg/Registration.svg" width="48" height="48" /><br /><sub>Registration</sub></td>
<td align="center" width="100"><img src="svg/Spontaneous-site.svg" width="48" height="48" /><br /><sub>Spontaneous site</sub></td>
<td align="center" width="100"><img src="svg/Temporary-camp.svg" width="48" height="48" /><br /><sub>Temporary camp</sub></td>
<td align="center" width="100"><img src="svg/Transition-site.svg" width="48" height="48" /><br /><sub>Transition site</sub></td>
</tr></table>

### Clusters (11)

<table><tr>
<td align="center" width="100"><img src="svg/Camp-coordination-and-camp-management.svg" width="48" height="48" /><br /><sub>Camp coordination and camp management</sub></td>
<td align="center" width="100"><img src="svg/Early-recovery.svg" width="48" height="48" /><br /><sub>Early recovery</sub></td>
<td align="center" width="100"><img src="svg/Education.svg" width="48" height="48" /><br /><sub>Education</sub></td>
<td align="center" width="100"><img src="svg/Emergency-telecommunications.svg" width="48" height="48" /><br /><sub>Emergency telecommunications</sub></td>
<td align="center" width="100"><img src="svg/Food-security.svg" width="48" height="48" /><br /><sub>Food security</sub></td>
<td align="center" width="100"><img src="svg/Health.svg" width="48" height="48" /><br /><sub>Health</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Logistics.svg" width="48" height="48" /><br /><sub>Logistics</sub></td>
<td align="center" width="100"><img src="svg/Nutrition.svg" width="48" height="48" /><br /><sub>Nutrition</sub></td>
<td align="center" width="100"><img src="svg/Protection.svg" width="48" height="48" /><br /><sub>Protection</sub></td>
<td align="center" width="100"><img src="svg/Shelter.svg" width="48" height="48" /><br /><sub>Shelter</sub></td>
<td align="center" width="100"><img src="svg/Water-sanitation-and-hygiene.svg" width="48" height="48" /><br /><sub>Water sanitation and hygiene</sub></td>
</tr></table>

### Damage (30)

<table><tr>
<td align="center" width="100"><img src="svg/Airport-affected.svg" width="48" height="48" /><br /><sub>Airport affected</sub></td>
<td align="center" width="100"><img src="svg/Airport-destroyed.svg" width="48" height="48" /><br /><sub>Airport destroyed</sub></td>
<td align="center" width="100"><img src="svg/Airport-not-affected.svg" width="48" height="48" /><br /><sub>Airport not affected</sub></td>
<td align="center" width="100"><img src="svg/Bridge-affected.svg" width="48" height="48" /><br /><sub>Bridge affected</sub></td>
<td align="center" width="100"><img src="svg/Bridge-destroyed.svg" width="48" height="48" /><br /><sub>Bridge destroyed</sub></td>
<td align="center" width="100"><img src="svg/Bridge-not-affected.svg" width="48" height="48" /><br /><sub>Bridge not affected</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Building-facility-affected.svg" width="48" height="48" /><br /><sub>Building facility affected</sub></td>
<td align="center" width="100"><img src="svg/Building-facility-destroyed.svg" width="48" height="48" /><br /><sub>Building facility destroyed</sub></td>
<td align="center" width="100"><img src="svg/Building-facility-not-affected.svg" width="48" height="48" /><br /><sub>Building facility not affected</sub></td>
<td align="center" width="100"><img src="svg/Damaged-affected.svg" width="48" height="48" /><br /><sub>Damaged affected</sub></td>
<td align="center" width="100"><img src="svg/Destroyed.svg" width="48" height="48" /><br /><sub>Destroyed</sub></td>
<td align="center" width="100"><img src="svg/Health-facility-affected.svg" width="48" height="48" /><br /><sub>Health facility affected</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Health-facility-destroyed.svg" width="48" height="48" /><br /><sub>Health facility destroyed</sub></td>
<td align="center" width="100"><img src="svg/Health-facility-not-affected.svg" width="48" height="48" /><br /><sub>Health facility not affected</sub></td>
<td align="center" width="100"><img src="svg/House-affected.svg" width="48" height="48" /><br /><sub>House affected</sub></td>
<td align="center" width="100"><img src="svg/House-destroyed.svg" width="48" height="48" /><br /><sub>House destroyed</sub></td>
<td align="center" width="100"><img src="svg/House-not-affected.svg" width="48" height="48" /><br /><sub>House not affected</sub></td>
<td align="center" width="100"><img src="svg/Not-affected.svg" width="48" height="48" /><br /><sub>Not affected</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Port-affected.svg" width="48" height="48" /><br /><sub>Port affected</sub></td>
<td align="center" width="100"><img src="svg/Port-destroyed.svg" width="48" height="48" /><br /><sub>Port destroyed</sub></td>
<td align="center" width="100"><img src="svg/Port-not-affected.svg" width="48" height="48" /><br /><sub>Port not affected</sub></td>
<td align="center" width="100"><img src="svg/Power-electricity-affected.svg" width="48" height="48" /><br /><sub>Power electricity affected</sub></td>
<td align="center" width="100"><img src="svg/Power-electricity-not-affected.svg" width="48" height="48" /><br /><sub>Power electricity not affected</sub></td>
<td align="center" width="100"><img src="svg/Power-outage.svg" width="48" height="48" /><br /><sub>Power outage</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Road-affected.svg" width="48" height="48" /><br /><sub>Road affected</sub></td>
<td align="center" width="100"><img src="svg/Road-destroyed.svg" width="48" height="48" /><br /><sub>Road destroyed</sub></td>
<td align="center" width="100"><img src="svg/Road-not-affected.svg" width="48" height="48" /><br /><sub>Road not affected</sub></td>
<td align="center" width="100"><img src="svg/School-affected.svg" width="48" height="48" /><br /><sub>School affected</sub></td>
<td align="center" width="100"><img src="svg/School-destroyed.svg" width="48" height="48" /><br /><sub>School destroyed</sub></td>
<td align="center" width="100"><img src="svg/School-not-affected.svg" width="48" height="48" /><br /><sub>School not affected</sub></td>
</tr></table>

### Disasters, hazards and crises (32)

<table><tr>
<td align="center" width="100"><img src="svg/Anticipatory-action.svg" width="48" height="48" /><br /><sub>Anticipatory action</sub></td>
<td align="center" width="100"><img src="svg/Cold-wave.svg" width="48" height="48" /><br /><sub>Cold wave</sub></td>
<td align="center" width="100"><img src="svg/Conflict.svg" width="48" height="48" /><br /><sub>Conflict</sub></td>
<td align="center" width="100"><img src="svg/Cyclone.svg" width="48" height="48" /><br /><sub>Cyclone</sub></td>
<td align="center" width="100"><img src="svg/Drought.svg" width="48" height="48" /><br /><sub>Drought</sub></td>
<td align="center" width="100"><img src="svg/Earthquake.svg" width="48" height="48" /><br /><sub>Earthquake</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Epidemic.svg" width="48" height="48" /><br /><sub>Epidemic</sub></td>
<td align="center" width="100"><img src="svg/Famine.svg" width="48" height="48" /><br /><sub>Famine</sub></td>
<td align="center" width="100"><img src="svg/Fire.svg" width="48" height="48" /><br /><sub>Fire</sub></td>
<td align="center" width="100"><img src="svg/Flash-flood.svg" width="48" height="48" /><br /><sub>Flash flood</sub></td>
<td align="center" width="100"><img src="svg/Flood.svg" width="48" height="48" /><br /><sub>Flood</sub></td>
<td align="center" width="100"><img src="svg/Heatwave.svg" width="48" height="48" /><br /><sub>Heatwave</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Heavy-rain.svg" width="48" height="48" /><br /><sub>Heavy rain</sub></td>
<td align="center" width="100"><img src="svg/Humanitarian-access.svg" width="48" height="48" /><br /><sub>Humanitarian access</sub></td>
<td align="center" width="100"><img src="svg/Insect-infestation.svg" width="48" height="48" /><br /><sub>Insect infestation</sub></td>
<td align="center" width="100"><img src="svg/Internally-displaced.svg" width="48" height="48" /><br /><sub>Internally displaced</sub></td>
<td align="center" width="100"><img src="svg/Landslide-mudslide.svg" width="48" height="48" /><br /><sub>Landslide mudslide</sub></td>
<td align="center" width="100"><img src="svg/Locust-infestation.svg" width="48" height="48" /><br /><sub>Locust infestation</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Population-return.svg" width="48" height="48" /><br /><sub>Population return</sub></td>
<td align="center" width="100"><img src="svg/Poverty.svg" width="48" height="48" /><br /><sub>Poverty</sub></td>
<td align="center" width="100"><img src="svg/Refugee.svg" width="48" height="48" /><br /><sub>Refugee</sub></td>
<td align="center" width="100"><img src="svg/Resilience.svg" width="48" height="48" /><br /><sub>Resilience</sub></td>
<td align="center" width="100"><img src="svg/Snow-avalanche.svg" width="48" height="48" /><br /><sub>Snow avalanche</sub></td>
<td align="center" width="100"><img src="svg/Snowfall.svg" width="48" height="48" /><br /><sub>Snowfall</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Storm.svg" width="48" height="48" /><br /><sub>Storm</sub></td>
<td align="center" width="100"><img src="svg/Storm-surge.svg" width="48" height="48" /><br /><sub>Storm surge</sub></td>
<td align="center" width="100"><img src="svg/Technological-disaster.svg" width="48" height="48" /><br /><sub>Technological disaster</sub></td>
<td align="center" width="100"><img src="svg/Tornado.svg" width="48" height="48" /><br /><sub>Tornado</sub></td>
<td align="center" width="100"><img src="svg/Tsunami.svg" width="48" height="48" /><br /><sub>Tsunami</sub></td>
<td align="center" width="100"><img src="svg/Violent-wind.svg" width="48" height="48" /><br /><sub>Violent wind</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Volcano.svg" width="48" height="48" /><br /><sub>Volcano</sub></td>
<td align="center" width="100"><img src="svg/Worm-infestation.svg" width="48" height="48" /><br /><sub>Worm infestation</sub></td>
</tr></table>

### Food and non-food items (25)

<table><tr>
<td align="center" width="100"><img src="svg/Blanket.svg" width="48" height="48" /><br /><sub>Blanket</sub></td>
<td align="center" width="100"><img src="svg/Bottled-water.svg" width="48" height="48" /><br /><sub>Bottled water</sub></td>
<td align="center" width="100"><img src="svg/Bucket.svg" width="48" height="48" /><br /><sub>Bucket</sub></td>
<td align="center" width="100"><img src="svg/Clothing.svg" width="48" height="48" /><br /><sub>Clothing</sub></td>
<td align="center" width="100"><img src="svg/Detergent.svg" width="48" height="48" /><br /><sub>Detergent</sub></td>
<td align="center" width="100"><img src="svg/Flour.svg" width="48" height="48" /><br /><sub>Flour</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Food.svg" width="48" height="48" /><br /><sub>Food</sub></td>
<td align="center" width="100"><img src="svg/Kitchen-set.svg" width="48" height="48" /><br /><sub>Kitchen set</sub></td>
<td align="center" width="100"><img src="svg/Mattress.svg" width="48" height="48" /><br /><sub>Mattress</sub></td>
<td align="center" width="100"><img src="svg/Medical-supply.svg" width="48" height="48" /><br /><sub>Medical supply</sub></td>
<td align="center" width="100"><img src="svg/Medicine.svg" width="48" height="48" /><br /><sub>Medicine</sub></td>
<td align="center" width="100"><img src="svg/Mosquito-net.svg" width="48" height="48" /><br /><sub>Mosquito net</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Non-food-items.svg" width="48" height="48" /><br /><sub>Non food items</sub></td>
<td align="center" width="100"><img src="svg/Non-food-items-2.svg" width="48" height="48" /><br /><sub>Non food items 2</sub></td>
<td align="center" width="100"><img src="svg/Oil.svg" width="48" height="48" /><br /><sub>Oil</sub></td>
<td align="center" width="100"><img src="svg/Plastic-sheeting.svg" width="48" height="48" /><br /><sub>Plastic sheeting</sub></td>
<td align="center" width="100"><img src="svg/Relief-goods.svg" width="48" height="48" /><br /><sub>Relief goods</sub></td>
<td align="center" width="100"><img src="svg/Rice.svg" width="48" height="48" /><br /><sub>Rice</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Salt.svg" width="48" height="48" /><br /><sub>Salt</sub></td>
<td align="center" width="100"><img src="svg/Soap.svg" width="48" height="48" /><br /><sub>Soap</sub></td>
<td align="center" width="100"><img src="svg/Stove.svg" width="48" height="48" /><br /><sub>Stove</sub></td>
<td align="center" width="100"><img src="svg/Sugar.svg" width="48" height="48" /><br /><sub>Sugar</sub></td>
<td align="center" width="100"><img src="svg/Tarpaulin.svg" width="48" height="48" /><br /><sub>Tarpaulin</sub></td>
<td align="center" width="100"><img src="svg/Tent.svg" width="48" height="48" /><br /><sub>Tent</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Vaccine.svg" width="48" height="48" /><br /><sub>Vaccine</sub></td>
</tr></table>

### General infrastructure (28)

<table><tr>
<td align="center" width="100"><img src="svg/Assembly-point.svg" width="48" height="48" /><br /><sub>Assembly point</sub></td>
<td align="center" width="100"><img src="svg/Buddhist-temple.svg" width="48" height="48" /><br /><sub>Buddhist temple</sub></td>
<td align="center" width="100"><img src="svg/Building.svg" width="48" height="48" /><br /><sub>Building</sub></td>
<td align="center" width="100"><img src="svg/Church.svg" width="48" height="48" /><br /><sub>Church</sub></td>
<td align="center" width="100"><img src="svg/Clinic.svg" width="48" height="48" /><br /><sub>Clinic</sub></td>
<td align="center" width="100"><img src="svg/Community-building.svg" width="48" height="48" /><br /><sub>Community building</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Country.svg" width="48" height="48" /><br /><sub>Country</sub></td>
<td align="center" width="100"><img src="svg/Diplomatic-mission.svg" width="48" height="48" /><br /><sub>Diplomatic mission</sub></td>
<td align="center" width="100"><img src="svg/Distribution-site.svg" width="48" height="48" /><br /><sub>Distribution site</sub></td>
<td align="center" width="100"><img src="svg/Food-warehouse.svg" width="48" height="48" /><br /><sub>Food warehouse</sub></td>
<td align="center" width="100"><img src="svg/Government-office.svg" width="48" height="48" /><br /><sub>Government office</sub></td>
<td align="center" width="100"><img src="svg/Health-facility.svg" width="48" height="48" /><br /><sub>Health facility</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Health-post.svg" width="48" height="48" /><br /><sub>Health post</sub></td>
<td align="center" width="100"><img src="svg/Hindu-temple.svg" width="48" height="48" /><br /><sub>Hindu temple</sub></td>
<td align="center" width="100"><img src="svg/Hospital.svg" width="48" height="48" /><br /><sub>Hospital</sub></td>
<td align="center" width="100"><img src="svg/Hotel.svg" width="48" height="48" /><br /><sub>Hotel</sub></td>
<td align="center" width="100"><img src="svg/House.svg" width="48" height="48" /><br /><sub>House</sub></td>
<td align="center" width="100"><img src="svg/Infrastructure.svg" width="48" height="48" /><br /><sub>Infrastructure</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Market.svg" width="48" height="48" /><br /><sub>Market</sub></td>
<td align="center" width="100"><img src="svg/Mobile-clinic.svg" width="48" height="48" /><br /><sub>Mobile clinic</sub></td>
<td align="center" width="100"><img src="svg/Mosque.svg" width="48" height="48" /><br /><sub>Mosque</sub></td>
<td align="center" width="100"><img src="svg/NGO-office.svg" width="48" height="48" /><br /><sub>NGO office</sub></td>
<td align="center" width="100"><img src="svg/Oil-facility.svg" width="48" height="48" /><br /><sub>Oil facility</sub></td>
<td align="center" width="100"><img src="svg/Police-station.svg" width="48" height="48" /><br /><sub>Police station</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Power-electricity.svg" width="48" height="48" /><br /><sub>Power electricity</sub></td>
<td align="center" width="100"><img src="svg/School.svg" width="48" height="48" /><br /><sub>School</sub></td>
<td align="center" width="100"><img src="svg/UN-compound-office.svg" width="48" height="48" /><br /><sub>UN compound office</sub></td>
<td align="center" width="100"><img src="svg/University.svg" width="48" height="48" /><br /><sub>University</sub></td>
</tr></table>

### Health (19)

<table><tr>
<td align="center" width="100"><img src="svg/Bacteria.svg" width="48" height="48" /><br /><sub>Bacteria</sub></td>
<td align="center" width="100"><img src="svg/COVID-19.svg" width="48" height="48" /><br /><sub>COVID-19</sub></td>
<td align="center" width="100"><img src="svg/Case-management.svg" width="48" height="48" /><br /><sub>Case management</sub></td>
<td align="center" width="100"><img src="svg/Doctor.svg" width="48" height="48" /><br /><sub>Doctor</sub></td>
<td align="center" width="100"><img src="svg/Handwashing.svg" width="48" height="48" /><br /><sub>Handwashing</sub></td>
<td align="center" width="100"><img src="svg/Health-worker.svg" width="48" height="48" /><br /><sub>Health worker</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Hospital-bed.svg" width="48" height="48" /><br /><sub>Hospital bed</sub></td>
<td align="center" width="100"><img src="svg/Infected.svg" width="48" height="48" /><br /><sub>Infected</sub></td>
<td align="center" width="100"><img src="svg/Infection-control.svg" width="48" height="48" /><br /><sub>Infection control</sub></td>
<td align="center" width="100"><img src="svg/Laboratory.svg" width="48" height="48" /><br /><sub>Laboratory</sub></td>
<td align="center" width="100"><img src="svg/Life-saving.svg" width="48" height="48" /><br /><sub>Life saving</sub></td>
<td align="center" width="100"><img src="svg/Mask.svg" width="48" height="48" /><br /><sub>Mask</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Not-infected.svg" width="48" height="48" /><br /><sub>Not infected</sub></td>
<td align="center" width="100"><img src="svg/Physical-distancing.svg" width="48" height="48" /><br /><sub>Physical distancing</sub></td>
<td align="center" width="100"><img src="svg/Respiratory.svg" width="48" height="48" /><br /><sub>Respiratory</sub></td>
<td align="center" width="100"><img src="svg/Sanitizer.svg" width="48" height="48" /><br /><sub>Sanitizer</sub></td>
<td align="center" width="100"><img src="svg/Testing.svg" width="48" height="48" /><br /><sub>Testing</sub></td>
<td align="center" width="100"><img src="svg/Ventilator.svg" width="48" height="48" /><br /><sub>Ventilator</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Virus.svg" width="48" height="48" /><br /><sub>Virus</sub></td>
</tr></table>

### Lockdown (10)

<table><tr>
<td align="center" width="100"><img src="svg/Airport-closed.svg" width="48" height="48" /><br /><sub>Airport closed</sub></td>
<td align="center" width="100"><img src="svg/Border-closed.svg" width="48" height="48" /><br /><sub>Border closed</sub></td>
<td align="center" width="100"><img src="svg/Bridge-closed.svg" width="48" height="48" /><br /><sub>Bridge closed</sub></td>
<td align="center" width="100"><img src="svg/Building-closed.svg" width="48" height="48" /><br /><sub>Building closed</sub></td>
<td align="center" width="100"><img src="svg/House-lockdown.svg" width="48" height="48" /><br /><sub>House lockdown</sub></td>
<td align="center" width="100"><img src="svg/Location-lockdown.svg" width="48" height="48" /><br /><sub>Location lockdown</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Market-closed.svg" width="48" height="48" /><br /><sub>Market closed</sub></td>
<td align="center" width="100"><img src="svg/Port-closed.svg" width="48" height="48" /><br /><sub>Port closed</sub></td>
<td align="center" width="100"><img src="svg/Road-closed.svg" width="48" height="48" /><br /><sub>Road closed</sub></td>
<td align="center" width="100"><img src="svg/School-closed.svg" width="48" height="48" /><br /><sub>School closed</sub></td>
</tr></table>

### Logistics (17)

<table><tr>
<td align="center" width="100"><img src="svg/Airport.svg" width="48" height="48" /><br /><sub>Airport</sub></td>
<td align="center" width="100"><img src="svg/Airport-military.svg" width="48" height="48" /><br /><sub>Airport military</sub></td>
<td align="center" width="100"><img src="svg/Boat.svg" width="48" height="48" /><br /><sub>Boat</sub></td>
<td align="center" width="100"><img src="svg/Bridge.svg" width="48" height="48" /><br /><sub>Bridge</sub></td>
<td align="center" width="100"><img src="svg/Bus.svg" width="48" height="48" /><br /><sub>Bus</sub></td>
<td align="center" width="100"><img src="svg/Car.svg" width="48" height="48" /><br /><sub>Car</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Ferry.svg" width="48" height="48" /><br /><sub>Ferry</sub></td>
<td align="center" width="100"><img src="svg/Gas-station.svg" width="48" height="48" /><br /><sub>Gas station</sub></td>
<td align="center" width="100"><img src="svg/Helicopter.svg" width="48" height="48" /><br /><sub>Helicopter</sub></td>
<td align="center" width="100"><img src="svg/Helipad.svg" width="48" height="48" /><br /><sub>Helipad</sub></td>
<td align="center" width="100"><img src="svg/Port.svg" width="48" height="48" /><br /><sub>Port</sub></td>
<td align="center" width="100"><img src="svg/Road.svg" width="48" height="48" /><br /><sub>Road</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Ship.svg" width="48" height="48" /><br /><sub>Ship</sub></td>
<td align="center" width="100"><img src="svg/Train.svg" width="48" height="48" /><br /><sub>Train</sub></td>
<td align="center" width="100"><img src="svg/Truck.svg" width="48" height="48" /><br /><sub>Truck</sub></td>
<td align="center" width="100"><img src="svg/Tunnel.svg" width="48" height="48" /><br /><sub>Tunnel</sub></td>
<td align="center" width="100"><img src="svg/UN-vehicle.svg" width="48" height="48" /><br /><sub>UN vehicle</sub></td>
</tr></table>

### Other sectors (11)

<table><tr>
<td align="center" width="100"><img src="svg/Agriculture.svg" width="48" height="48" /><br /><sub>Agriculture</sub></td>
<td align="center" width="100"><img src="svg/Child-care-child-friendly.svg" width="48" height="48" /><br /><sub>Child care child friendly</sub></td>
<td align="center" width="100"><img src="svg/Child-protection.svg" width="48" height="48" /><br /><sub>Child protection</sub></td>
<td align="center" width="100"><img src="svg/Coordination.svg" width="48" height="48" /><br /><sub>Coordination</sub></td>
<td align="center" width="100"><img src="svg/Environment.svg" width="48" height="48" /><br /><sub>Environment</sub></td>
<td align="center" width="100"><img src="svg/Fishery.svg" width="48" height="48" /><br /><sub>Fishery</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Logistics-and-telecommunications.svg" width="48" height="48" /><br /><sub>Logistics and telecommunications</sub></td>
<td align="center" width="100"><img src="svg/Multi-cluster-sector.svg" width="48" height="48" /><br /><sub>Multi-cluster sector</sub></td>
<td align="center" width="100"><img src="svg/Rule-of-law-and-justice.svg" width="48" height="48" /><br /><sub>Rule of law and justice</sub></td>
<td align="center" width="100"><img src="svg/Safety-and-security.svg" width="48" height="48" /><br /><sub>Safety and security</sub></td>
<td align="center" width="100"><img src="svg/Shelter-land-and-site-coordination.svg" width="48" height="48" /><br /><sub>Shelter, land and site coordination</sub></td>
</tr></table>

### People (27)

<table><tr>
<td align="center" width="100"><img src="svg/Affected-population.svg" width="48" height="48" /><br /><sub>Affected population</sub></td>
<td align="center" width="100"><img src="svg/Child-combatant.svg" width="48" height="48" /><br /><sub>Child combatant</sub></td>
<td align="center" width="100"><img src="svg/Children.svg" width="48" height="48" /><br /><sub>Children</sub></td>
<td align="center" width="100"><img src="svg/Dead.svg" width="48" height="48" /><br /><sub>Dead</sub></td>
<td align="center" width="100"><img src="svg/Drowned.svg" width="48" height="48" /><br /><sub>Drowned</sub></td>
<td align="center" width="100"><img src="svg/Elderly.svg" width="48" height="48" /><br /><sub>Elderly</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Gender.svg" width="48" height="48" /><br /><sub>Gender</sub></td>
<td align="center" width="100"><img src="svg/Indigenous-people.svg" width="48" height="48" /><br /><sub>Indigenous people</sub></td>
<td align="center" width="100"><img src="svg/Infant.svg" width="48" height="48" /><br /><sub>Infant</sub></td>
<td align="center" width="100"><img src="svg/Injured.svg" width="48" height="48" /><br /><sub>Injured</sub></td>
<td align="center" width="100"><img src="svg/Missing.svg" width="48" height="48" /><br /><sub>Missing</sub></td>
<td align="center" width="100"><img src="svg/National-army.svg" width="48" height="48" /><br /><sub>National army</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Peacekeeping-force.svg" width="48" height="48" /><br /><sub>Peacekeeping force</sub></td>
<td align="center" width="100"><img src="svg/People-affected.svg" width="48" height="48" /><br /><sub>People affected</sub></td>
<td align="center" width="100"><img src="svg/People-covered.svg" width="48" height="48" /><br /><sub>People covered</sub></td>
<td align="center" width="100"><img src="svg/People-in-need.svg" width="48" height="48" /><br /><sub>People in need</sub></td>
<td align="center" width="100"><img src="svg/People-in-need-2.svg" width="48" height="48" /><br /><sub>People in need 2</sub></td>
<td align="center" width="100"><img src="svg/People-reached.svg" width="48" height="48" /><br /><sub>People reached</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/People-targeted.svg" width="48" height="48" /><br /><sub>People targeted</sub></td>
<td align="center" width="100"><img src="svg/People-targeted-2.svg" width="48" height="48" /><br /><sub>People targeted 2</sub></td>
<td align="center" width="100"><img src="svg/People-with-physical-impairments.svg" width="48" height="48" /><br /><sub>People with physical impairments</sub></td>
<td align="center" width="100"><img src="svg/Person-1.svg" width="48" height="48" /><br /><sub>Person 1</sub></td>
<td align="center" width="100"><img src="svg/Person-2.svg" width="48" height="48" /><br /><sub>Person 2</sub></td>
<td align="center" width="100"><img src="svg/Pregnant.svg" width="48" height="48" /><br /><sub>Pregnant</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Rebel.svg" width="48" height="48" /><br /><sub>Rebel</sub></td>
<td align="center" width="100"><img src="svg/Resettlement.svg" width="48" height="48" /><br /><sub>Resettlement</sub></td>
<td align="center" width="100"><img src="svg/Sex.svg" width="48" height="48" /><br /><sub>Sex</sub></td>
</tr></table>

### Physical barriers (8)

<table><tr>
<td align="center" width="100"><img src="svg/Border-crossing.svg" width="48" height="48" /><br /><sub>Border crossing</sub></td>
<td align="center" width="100"><img src="svg/Checkpoint.svg" width="48" height="48" /><br /><sub>Checkpoint</sub></td>
<td align="center" width="100"><img src="svg/Earthmound.svg" width="48" height="48" /><br /><sub>Earthmound</sub></td>
<td align="center" width="100"><img src="svg/Military-gate.svg" width="48" height="48" /><br /><sub>Military gate</sub></td>
<td align="center" width="100"><img src="svg/Observation-tower.svg" width="48" height="48" /><br /><sub>Observation tower</sub></td>
<td align="center" width="100"><img src="svg/Physical-closure.svg" width="48" height="48" /><br /><sub>Physical closure</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Road-barrier.svg" width="48" height="48" /><br /><sub>Road barrier</sub></td>
<td align="center" width="100"><img src="svg/Roadblock.svg" width="48" height="48" /><br /><sub>Roadblock</sub></td>
</tr></table>

### Product type (14)

<table><tr>
<td align="center" width="100"><img src="svg/API.svg" width="48" height="48" /><br /><sub>API</sub></td>
<td align="center" width="100"><img src="svg/Calendar.svg" width="48" height="48" /><br /><sub>Calendar</sub></td>
<td align="center" width="100"><img src="svg/Chart.svg" width="48" height="48" /><br /><sub>Chart</sub></td>
<td align="center" width="100"><img src="svg/Data.svg" width="48" height="48" /><br /><sub>Data</sub></td>
<td align="center" width="100"><img src="svg/Document.svg" width="48" height="48" /><br /><sub>Document</sub></td>
<td align="center" width="100"><img src="svg/Film.svg" width="48" height="48" /><br /><sub>Film</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Live-geoservices.svg" width="48" height="48" /><br /><sub>Live geoservices</sub></td>
<td align="center" width="100"><img src="svg/Location.svg" width="48" height="48" /><br /><sub>Location</sub></td>
<td align="center" width="100"><img src="svg/Map.svg" width="48" height="48" /><br /><sub>Map</sub></td>
<td align="center" width="100"><img src="svg/P-code.svg" width="48" height="48" /><br /><sub>P-code</sub></td>
<td align="center" width="100"><img src="svg/Photo.svg" width="48" height="48" /><br /><sub>Photo</sub></td>
<td align="center" width="100"><img src="svg/Report.svg" width="48" height="48" /><br /><sub>Report</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Table.svg" width="48" height="48" /><br /><sub>Table</sub></td>
<td align="center" width="100"><img src="svg/Video.svg" width="48" height="48" /><br /><sub>Video</sub></td>
</tr></table>

### Security and incident (16)

<table><tr>
<td align="center" width="100"><img src="svg/Abduction-kidnapping.svg" width="48" height="48" /><br /><sub>Abduction kidnapping</sub></td>
<td align="center" width="100"><img src="svg/Arrest-detention.svg" width="48" height="48" /><br /><sub>Arrest detention</sub></td>
<td align="center" width="100"><img src="svg/Assault.svg" width="48" height="48" /><br /><sub>Assault</sub></td>
<td align="center" width="100"><img src="svg/Attack.svg" width="48" height="48" /><br /><sub>Attack</sub></td>
<td align="center" width="100"><img src="svg/Carjacking.svg" width="48" height="48" /><br /><sub>Carjacking</sub></td>
<td align="center" width="100"><img src="svg/Confined.svg" width="48" height="48" /><br /><sub>Confined</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Dangerous-area.svg" width="48" height="48" /><br /><sub>Dangerous area</sub></td>
<td align="center" width="100"><img src="svg/Forced-entry.svg" width="48" height="48" /><br /><sub>Forced entry</sub></td>
<td align="center" width="100"><img src="svg/Forced-recruitment.svg" width="48" height="48" /><br /><sub>Forced recruitment</sub></td>
<td align="center" width="100"><img src="svg/Gender-based-violence.svg" width="48" height="48" /><br /><sub>Gender based violence</sub></td>
<td align="center" width="100"><img src="svg/Harassment-intimidation.svg" width="48" height="48" /><br /><sub>Harassment intimidation</sub></td>
<td align="center" width="100"><img src="svg/House-burned.svg" width="48" height="48" /><br /><sub>House burned</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Mine.svg" width="48" height="48" /><br /><sub>Mine</sub></td>
<td align="center" width="100"><img src="svg/Murder.svg" width="48" height="48" /><br /><sub>Murder</sub></td>
<td align="center" width="100"><img src="svg/Robbery.svg" width="48" height="48" /><br /><sub>Robbery</sub></td>
<td align="center" width="100"><img src="svg/Sexual-violence.svg" width="48" height="48" /><br /><sub>Sexual violence</sub></td>
</tr></table>

### Socioeconomic and development (10)

<table><tr>
<td align="center" width="100"><img src="svg/Debris-management.svg" width="48" height="48" /><br /><sub>Debris management</sub></td>
<td align="center" width="100"><img src="svg/Livelihood.svg" width="48" height="48" /><br /><sub>Livelihood</sub></td>
<td align="center" width="100"><img src="svg/Livestock.svg" width="48" height="48" /><br /><sub>Livestock</sub></td>
<td align="center" width="100"><img src="svg/Population-growth.svg" width="48" height="48" /><br /><sub>Population growth</sub></td>
<td align="center" width="100"><img src="svg/Reconstruction.svg" width="48" height="48" /><br /><sub>Reconstruction</sub></td>
<td align="center" width="100"><img src="svg/Rural.svg" width="48" height="48" /><br /><sub>Rural</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Rural-exodus.svg" width="48" height="48" /><br /><sub>Rural exodus</sub></td>
<td align="center" width="100"><img src="svg/Trade-and-market.svg" width="48" height="48" /><br /><sub>Trade and market</sub></td>
<td align="center" width="100"><img src="svg/Urban.svg" width="48" height="48" /><br /><sub>Urban</sub></td>
<td align="center" width="100"><img src="svg/Urban-rural.svg" width="48" height="48" /><br /><sub>Urban rural</sub></td>
</tr></table>

### Telecommunications and technology (14)

<table><tr>
<td align="center" width="100"><img src="svg/Cell-tower.svg" width="48" height="48" /><br /><sub>Cell tower</sub></td>
<td align="center" width="100"><img src="svg/Computer.svg" width="48" height="48" /><br /><sub>Computer</sub></td>
<td align="center" width="100"><img src="svg/E-mail.svg" width="48" height="48" /><br /><sub>E-mail</sub></td>
<td align="center" width="100"><img src="svg/Fax.svg" width="48" height="48" /><br /><sub>Fax</sub></td>
<td align="center" width="100"><img src="svg/Internet.svg" width="48" height="48" /><br /><sub>Internet</sub></td>
<td align="center" width="100"><img src="svg/Laptop.svg" width="48" height="48" /><br /><sub>Laptop</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Mobile-phone.svg" width="48" height="48" /><br /><sub>Mobile phone</sub></td>
<td align="center" width="100"><img src="svg/Monitor.svg" width="48" height="48" /><br /><sub>Monitor</sub></td>
<td align="center" width="100"><img src="svg/Radio.svg" width="48" height="48" /><br /><sub>Radio</sub></td>
<td align="center" width="100"><img src="svg/Remote-support.svg" width="48" height="48" /><br /><sub>Remote support</sub></td>
<td align="center" width="100"><img src="svg/Satellite-dish.svg" width="48" height="48" /><br /><sub>Satellite dish</sub></td>
<td align="center" width="100"><img src="svg/Smartphone.svg" width="48" height="48" /><br /><sub>Smartphone</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Walkie-talkie.svg" width="48" height="48" /><br /><sub>Walkie talkie</sub></td>
<td align="center" width="100"><img src="svg/Work-from-home.svg" width="48" height="48" /><br /><sub>Work from home</sub></td>
</tr></table>

### UX UI (63)

<table><tr>
<td align="center" width="100"><img src="svg/AI-chat.svg" width="48" height="48" /><br /><sub>AI chat</sub></td>
<td align="center" width="100"><img src="svg/About.svg" width="48" height="48" /><br /><sub>About</sub></td>
<td align="center" width="100"><img src="svg/Add.svg" width="48" height="48" /><br /><sub>Add</sub></td>
<td align="center" width="100"><img src="svg/Add-document.svg" width="48" height="48" /><br /><sub>Add document</sub></td>
<td align="center" width="100"><img src="svg/Alert.svg" width="48" height="48" /><br /><sub>Alert</sub></td>
<td align="center" width="100"><img src="svg/Apps.svg" width="48" height="48" /><br /><sub>Apps</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Blog.svg" width="48" height="48" /><br /><sub>Blog</sub></td>
<td align="center" width="100"><img src="svg/Bookmark.svg" width="48" height="48" /><br /><sub>Bookmark</sub></td>
<td align="center" width="100"><img src="svg/CSV-file.svg" width="48" height="48" /><br /><sub>CSV file</sub></td>
<td align="center" width="100"><img src="svg/Chat.svg" width="48" height="48" /><br /><sub>Chat</sub></td>
<td align="center" width="100"><img src="svg/Checked-mail.svg" width="48" height="48" /><br /><sub>Checked mail</sub></td>
<td align="center" width="100"><img src="svg/Copy.svg" width="48" height="48" /><br /><sub>Copy</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/DOCX-file.svg" width="48" height="48" /><br /><sub>DOCX file</sub></td>
<td align="center" width="100"><img src="svg/Delete-account.svg" width="48" height="48" /><br /><sub>Delete account</sub></td>
<td align="center" width="100"><img src="svg/Down.svg" width="48" height="48" /><br /><sub>Down</sub></td>
<td align="center" width="100"><img src="svg/Download.svg" width="48" height="48" /><br /><sub>Download</sub></td>
<td align="center" width="100"><img src="svg/Edit.svg" width="48" height="48" /><br /><sub>Edit</sub></td>
<td align="center" width="100"><img src="svg/Exit-cancel.svg" width="48" height="48" /><br /><sub>Exit cancel</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Expand-down.svg" width="48" height="48" /><br /><sub>Expand down</sub></td>
<td align="center" width="100"><img src="svg/Expand-left.svg" width="48" height="48" /><br /><sub>Expand left</sub></td>
<td align="center" width="100"><img src="svg/Expand-right.svg" width="48" height="48" /><br /><sub>Expand right</sub></td>
<td align="center" width="100"><img src="svg/Expand-up.svg" width="48" height="48" /><br /><sub>Expand up</sub></td>
<td align="center" width="100"><img src="svg/Favourite.svg" width="48" height="48" /><br /><sub>Favourite</sub></td>
<td align="center" width="100"><img src="svg/Filter.svg" width="48" height="48" /><br /><sub>Filter</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Folder.svg" width="48" height="48" /><br /><sub>Folder</sub></td>
<td align="center" width="100"><img src="svg/Go.svg" width="48" height="48" /><br /><sub>Go</sub></td>
<td align="center" width="100"><img src="svg/Group.svg" width="48" height="48" /><br /><sub>Group</sub></td>
<td align="center" width="100"><img src="svg/Help.svg" width="48" height="48" /><br /><sub>Help</sub></td>
<td align="center" width="100"><img src="svg/Hidden.svg" width="48" height="48" /><br /><sub>Hidden</sub></td>
<td align="center" width="100"><img src="svg/Link.svg" width="48" height="48" /><br /><sub>Link</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Menu.svg" width="48" height="48" /><br /><sub>Menu</sub></td>
<td align="center" width="100"><img src="svg/More-options.svg" width="48" height="48" /><br /><sub>More options</sub></td>
<td align="center" width="100"><img src="svg/Next-item.svg" width="48" height="48" /><br /><sub>Next item</sub></td>
<td align="center" width="100"><img src="svg/Not-secured.svg" width="48" height="48" /><br /><sub>Not secured</sub></td>
<td align="center" width="100"><img src="svg/Notification.svg" width="48" height="48" /><br /><sub>Notification</sub></td>
<td align="center" width="100"><img src="svg/Out-of-platform.svg" width="48" height="48" /><br /><sub>Out of platform</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/PDF-file.svg" width="48" height="48" /><br /><sub>PDF file</sub></td>
<td align="center" width="100"><img src="svg/Password.svg" width="48" height="48" /><br /><sub>Password</sub></td>
<td align="center" width="100"><img src="svg/Pause.svg" width="48" height="48" /><br /><sub>Pause</sub></td>
<td align="center" width="100"><img src="svg/Previous-item.svg" width="48" height="48" /><br /><sub>Previous item</sub></td>
<td align="center" width="100"><img src="svg/Print.svg" width="48" height="48" /><br /><sub>Print</sub></td>
<td align="center" width="100"><img src="svg/Remove.svg" width="48" height="48" /><br /><sub>Remove</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Remove-document.svg" width="48" height="48" /><br /><sub>Remove document</sub></td>
<td align="center" width="100"><img src="svg/Return.svg" width="48" height="48" /><br /><sub>Return</sub></td>
<td align="center" width="100"><img src="svg/Save.svg" width="48" height="48" /><br /><sub>Save</sub></td>
<td align="center" width="100"><img src="svg/Search.svg" width="48" height="48" /><br /><sub>Search</sub></td>
<td align="center" width="100"><img src="svg/Secured.svg" width="48" height="48" /><br /><sub>Secured</sub></td>
<td align="center" width="100"><img src="svg/Security.svg" width="48" height="48" /><br /><sub>Security</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/See.svg" width="48" height="48" /><br /><sub>See</sub></td>
<td align="center" width="100"><img src="svg/Selected.svg" width="48" height="48" /><br /><sub>Selected</sub></td>
<td align="center" width="100"><img src="svg/Settings.svg" width="48" height="48" /><br /><sub>Settings</sub></td>
<td align="center" width="100"><img src="svg/Share.svg" width="48" height="48" /><br /><sub>Share</sub></td>
<td align="center" width="100"><img src="svg/Stop.svg" width="48" height="48" /><br /><sub>Stop</sub></td>
<td align="center" width="100"><img src="svg/Time.svg" width="48" height="48" /><br /><sub>Time</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Trending.svg" width="48" height="48" /><br /><sub>Trending</sub></td>
<td align="center" width="100"><img src="svg/Up.svg" width="48" height="48" /><br /><sub>Up</sub></td>
<td align="center" width="100"><img src="svg/Upload.svg" width="48" height="48" /><br /><sub>Upload</sub></td>
<td align="center" width="100"><img src="svg/User.svg" width="48" height="48" /><br /><sub>User</sub></td>
<td align="center" width="100"><img src="svg/Users.svg" width="48" height="48" /><br /><sub>Users</sub></td>
<td align="center" width="100"><img src="svg/Validate-account.svg" width="48" height="48" /><br /><sub>Validate account</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Warning-error.svg" width="48" height="48" /><br /><sub>Warning error</sub></td>
<td align="center" width="100"><img src="svg/XLSX-file.svg" width="48" height="48" /><br /><sub>XLSX file</sub></td>
<td align="center" width="100"><img src="svg/ZIP-compressed.svg" width="48" height="48" /><br /><sub>ZIP compressed</sub></td>
</tr></table>

### Water sanitation and hygiene (13)

<table><tr>
<td align="center" width="100"><img src="svg/Borehole.svg" width="48" height="48" /><br /><sub>Borehole</sub></td>
<td align="center" width="100"><img src="svg/Communal-latrine.svg" width="48" height="48" /><br /><sub>Communal latrine</sub></td>
<td align="center" width="100"><img src="svg/Latrine-cabin.svg" width="48" height="48" /><br /><sub>Latrine cabin</sub></td>
<td align="center" width="100"><img src="svg/Potable-water.svg" width="48" height="48" /><br /><sub>Potable water</sub></td>
<td align="center" width="100"><img src="svg/Potable-water-source.svg" width="48" height="48" /><br /><sub>Potable water source</sub></td>
<td align="center" width="100"><img src="svg/Sanitation.svg" width="48" height="48" /><br /><sub>Sanitation</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Shower.svg" width="48" height="48" /><br /><sub>Shower</sub></td>
<td align="center" width="100"><img src="svg/Solid-waste.svg" width="48" height="48" /><br /><sub>Solid waste</sub></td>
<td align="center" width="100"><img src="svg/Spring-water.svg" width="48" height="48" /><br /><sub>Spring water</sub></td>
<td align="center" width="100"><img src="svg/Submersible-pump.svg" width="48" height="48" /><br /><sub>Submersible pump</sub></td>
<td align="center" width="100"><img src="svg/Toilet.svg" width="48" height="48" /><br /><sub>Toilet</sub></td>
<td align="center" width="100"><img src="svg/Water-source.svg" width="48" height="48" /><br /><sub>Water source</sub></td>
</tr><tr>
<td align="center" width="100"><img src="svg/Water-trucking.svg" width="48" height="48" /><br /><sub>Water trucking</sub></td>
</tr></table>



## License

The OCHA Humanitarian Icons are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). You are free to share and adapt them with appropriate credit to OCHA.

---

## Internal Tools

These tools are used by BDU to manage, generate, and distribute the icon collection. They are not intended for end users.

### Wordmark Generator

A browser-based tool that allows OCHA staff to create branded wordmarks using Humanitarian Icons. All wordmarks require BDU approval before final download.

**Live tool:** https://un-ocha.github.io/humanitarian-icons-2026-BDU/word-mark-generator/

91 of the 389 icons are approved for use in wordmarks. The approval workflow is automated: BDU changes a status in a Google Sheet, and the requester receives an email with a direct download link.

| File | Purpose |
|---|---|
| `word-mark-generator/index.html` | The generator (single-page app, no build step) |
| `word-mark-generator/google-apps-script.js` | Backend code deployed as a Google Apps Script web app |
| `word-mark-generator/APPROVAL_SETUP.md` | Setup and operations documentation |

### Icon Manager

A browser-based tool for adding new icons, editing tags, changing families, and managing wordmark approval. Open `icon-manager/index.html` in Chrome or Edge — drag-drop SVGs, edit tags as chips, save back to `metadata.json`.

| File | Purpose |
|---|---|
| `icon-manager/index.html` | The icon manager interface |

### Build Scripts

Python utilities for generating the distributable exports. Requires Python 3.9+ with dependencies in `.venv/`.

| Script | What it does |
|---|---|
| `scripts/populate_metadata.py` | Refreshes `metadata.json` from `svg/`: adds stubs for new icons, normalises display names, reassigns font codepoints alphabetically |
| `scripts/generate-excel.py` | Generates the Excel export |
| `scripts/generate-pptx.py` | Generates the PowerPoint export |
| `scripts/generate-font.py` | Generates the icon font |
| `scripts/generate-grid.py` | Generates the complete SVG grid |
| `scripts/generate-wordmark.py` | Batch generates wordmarks from metadata |
| `scripts/sync_to_frontify.py` | Syncs new SVGs + tag changes from `metadata.json` to the OCHA Frontify icon library |

---

## Adding a new icon

The full pipeline runs automatically on push via [`.github/workflows/sync-and-build.yml`](.github/workflows/sync-and-build.yml). The contributor's job is just to drop the SVG and update `metadata.json` — the icon manager handles the second part visually.

### Recommended: use the icon manager

1. Open `icon-manager/index.html` in **Chrome** or **Edge**.
2. Click **+ Add Icon**, drag your SVG into the drop zone, pick a family, type a few tags.
3. Click **Add Icon** → save the SVG into the repo's `svg/` folder when prompted.
4. Click **Export metadata.json** → save it over the repo's `metadata.json`.
5. Commit and push:
   ```bash
   git add svg/ metadata.json
   git commit -m "add: <icon-name>"
   git push
   ```

### Manual alternative

If you'd rather edit JSON directly:

1. Drop the SVG in `svg/` using kebab-case-with-capital-first (e.g. `Drone.svg`). Single colour: OCHA blue `#009edb`.
2. Add an entry to `metadata.json["icons"]`:
   ```json
   "Drone": {
     "name": "Drone",
     "family": "Logistics",
     "tags": ["uav", "aerial vehicle", "quadcopter"],
     "wordmark": false,
     "wordmark_valign": 0,
     "font_codepoint": "",
     "date_added": "2026-05-19"
   }
   ```
   (`font_codepoint` is reassigned by CI on the next push — leave blank or use any value.)
3. Commit and push.

### What CI does automatically

- Runs `populate_metadata.py` to refresh `metadata.json` (adds stubs for any new icons, normalises display names, reassigns font codepoints alphabetically).
- Regenerates `output/Humanitarian_icons.xlsx`, `.csv`, `.pptx`, the icon font, and the complete SVG grid.
- Uploads any new SVGs to the OCHA Frontify icon library and applies their tags.
- Commits the refreshed `metadata.json` and `output/` files back to `main`.

If the Frontify step is ever skipped or fails, run it manually:

```bash
pip install -r requirements.txt
FRONTIFY_TOKEN="<your-token>" python scripts/sync_to_frontify.py --dry-run   # preview
FRONTIFY_TOKEN="<your-token>" python scripts/sync_to_frontify.py             # apply
```

The script is **additive only** — it never removes tags or deletes icons. Orphans (icons in Frontify but missing from `svg/`) are reported as warnings for manual investigation.

### Setting up the Frontify automation (one-time)

For the GitHub Action's Frontify sync step to work, the repo needs one secret:

1. Go to **Settings → Secrets and variables → Actions** in this repo.
2. Add a new repository secret named `FRONTIFY_TOKEN` containing a personal access token from `brand.unocha.org` with the brand + asset scopes.

Optional repo variables (defaults are correct for OCHA): `FRONTIFY_DOMAIN` (default `brand.unocha.org`), `FRONTIFY_LIBRARY_ID` (default `251023`).

---

## Project Owner

Javier Cueto, Head of Brand and Design Unit

## Maintained by

**OCHA Brand and Design Unit (BDU)**
- Team: ochavisual@un.org
- Focal point: Javier Cueto (cuetoj@un.org)
