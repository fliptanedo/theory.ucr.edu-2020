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

1. Copy over images to `./static/img/`

2. Copy over `./layouts/`, this contains the templates for pages and widgets. When there's a new version of Academic, it's worth going to `./themes/academic/layouts/` to see what the new default templates are. (Do not edit anything in the `./themes/` folder!)

3. Deal with custom CSS. Unlike earlier versions of Hugo Academic, CSS and javascript now go into the `./assets` folder and are called in `params.toml`. See [this discussion\](https://github.com/gcushen/hugo-academic/issues/867). As of [Academic Version 4.6](https://sourcethemes.com/academic/updates/v4.6.0/), the `plugins_css` approach has been depreciated. Compare this to custom JavaScript in `params.toml` which is specified as `plugins_js`; this is the way custom CSS used to be input; now it all goes into a single css file. 

   1. Create a new folder `./assets/scss/` with a file `custom.scss`. 
   2. Copy and paste your custom CSS into this file. Note that SCSS is a superset of CSS. 

4. Copy over `./content/home/` widgets as appropriate.

   1. `about.html`: comment out the social icons and interests row

   2. Put in UCR logo and funding agencies: is belongs in `./content/authors/admin._index.md` at the bottom of the main content: 

      ```
      ![logo](./img/logos/UCR.png) ![logo](./img/logos/pna.png) ![logo](./img/logos/uc_seal_lock-up_blue_cmyk.png) ![logo](./img/logos/NASA.png)  ![logo](./img/logos/US-DeptOfEnergy-Seal.png)
      ```

       If the logo sizes are all messed up, then there was a problem with the CSS defining the logo style.
      
   3. Note: you may have to dig into the theme default files to see which CSS attributes you need to modify. For example, the size of the profile picture lives in `.themes/academic/assets/scss/academic/_widgets.scss` as `.avatar{...}`. 

   4. Create a `news.md` file and copy over. Note as of Hugo 0.55 shortcodes no longer work the same way. The call now looks like `{{< twitter UCR_HEP_Theory >}}`, the shortcode now refers to the first argument as `{{ .Get 0 }}`. 



## Custom Theme

[Customization and creating yoru own theme](https://sourcethemes.com/academic/docs/customization/#custom-theme).

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
