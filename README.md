# UCR hep-ph group website Readme

by Flip Tanedo (flip.tanedo@ucr.edu)
June 2020 edition (Jun 28)

## Credit

This is a modified version of George Cushen's *Academic* theme for Hugo. Flip Tanedo modified this theme starting in 2017 for the University of California, Riverside Particle Theory group website. The default *Academic* kickstart readme is reproduced.

## Instructions

Required: an updated installation of [Hugo](https://gohugo.io/getting-started/quick-start/).

1. Download and install George Cushen's [Hugo Theme Academic](https://sourcethemes.com/academic/). Follow the instructions for using the Academic Kickstart. I prefer forking from GitHub since I'm not using Netflify to deploy.

   1. Fork the latest Academic kickstart on GitHub

   2. Use the clone button to copy the forked repository's URL:

      ````
      git clone https://github.com/fliptanedo/theory.ucr.edu-2020.git theory.ucr.edu-2020
      ````

2. Check that everything's working. To do this, run a draft server in the folder to which you downloaded: `hugo server -D. This gives a ` URL that you can use to see what the website looks like.

3. Edit `config/_default/params.toml`, at least the following:

   1. `title`
   2. `baseurl`

4. Edit `params.toml` in the same directory: Name, biography, address... lots of little things to update. Do these quickly, we'll be modifying the widgets separately.

5. Remove extra content in `content/home/`
   Only keep: `about`, `contact`, `index`, `hero` (default to not shown), `slider` (default to not shown). 

6. Remove extra folders: `post`, `publication

7. Copy assets from old build.

## Heavy Lifting

The latest version of Hugo Academic changes the way [one customizes styles](https://sourcethemes.com/academic/docs/customization/#custom-theme), including how style sheets are applied. 

## Edits from the default theme

The main challenge is to place the Feynman diagram footer. The *Academic* theme changed the page formatting. It's a little harder to get a `div` that stretches across the width of the page. 

It looks like the place to make edits is `baseof.html`. There you can tell that the `site_footer.html` partial is encoded in a `div class='container'`.

## Edits from the default theme: early 2019

*This is now somewhat outdated.*

These are notes on how the Academic kickstart

* Copied from old build:

  - `/static/img/` directory containing group photos, etc.
  - `/static/css/` directory containing `UCRhep.css`
  - `/data/fonts/flip.toml` with font metadata (set `font = "flip"` in `config.toml`):
  - `/layouts/` directory with custom formatting and shortcodes ... but these needed to be updated

  ```toml
  # Font style metadata
  name = "flip"
  
  # Optional Google font URL
  google_fonts = "Montserrat:400,700|Open+Sans|Roboto+Mono|Raleway"
  
  # Font families
  heading_font = "Montserrat"
  body_font = "Raleway"
  nav_font = "Roboto"
  mono_font = "Roboto Mono"
  
  # Font size
  font_size = "20"
  font_size_small = "18"
  ```

```
* Many other copied options in `config.toml` (note there have been some updates to the Academic theme, notably in the icon packs)

* Favicon: observe that the `/themes/layouts/partials/header.html` template has the following:
​```html
  <link rel="icon" type="image/png" href="{{ "/img/icon.png" | relURL }}">
  <link rel="apple-touch-icon" type="image/png" href="{{ "/img/icon-192.png" | relURL }}">
```

This means that need to place an `icon.png` and an `icon-192.png` file in the `/img/` directory for the favicon. (Do *not* modify the template: there's no need, and you should never directly edit the source templates anyway.)

* Note: the latest version of Hugo uses Bootstrap 4. The previous version of the group website used Bootstrap 3. This means that all of my partials have incorrect grids. This can be tricky to sort out and has forced me to be careful with indentation. Use `\themes\...\custom.html` as a template.

* New in this version: grayscale "emeritus/past student" blocks on the rosters. This is "automatic" and is straightforward to. The relevant markdown files have variables like:

```markdown
haspast = true
recenttitle = "Emeritus Faculty"
```

and each individual now has options for variables:

```markdown  
  past = true
  start = "2017"
  end = "2018"
```
