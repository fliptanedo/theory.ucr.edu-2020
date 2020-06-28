# theory.ucr.edu



UCR Particle Theory Website (2020; June edit)
Maintained by Flip Tanedo (flip.tanedo@ucr.edu)

This contains the UC Riverside Particle Theory group website along with the professional sub-websites of group members.

Unlike the 2019 file structure, I am building the UCR particle theory page separately from my personal page. I don't update these files in real time, so the current status quo should be sufficient until I sort out a better Netlify deployment.

### Notes for the future

* [Netlify documentation for subfolders](https://community.netlify.com/t/deploy-multiple-netlify-apps-to-single-domain-and-subfolders/10897)
* [Netlify documentation for proxy](https://community.netlify.com/t/support-guide-can-i-deploy-multiple-repositories-in-a-single-site/179)

Note: it mau be sufficient to use GitHub pages with submodules when doing this.

## 2019 File Structure

```
www_2019
+-- academic-2019-ucrhep
    └-- README.md
    └-- and other files
+-- academic-2019-flip
    └-- README.md
    └-- and other files
+-- www2019
README.txt
```

Hosted:

* **ucrhep** is the group website built using the Hugo static site generator and the Academic Theme
* **flip** is Flip Tanedo's website built using the Hugo static site generator and the Academic Theme

This is a little tricky. The idea is that there are hugo folders (`academic-...`) that contain the source files for generating the static site. These sites output to `www2019`, which is what should be synchronized to GitHub/Netlify.

Here's the subtle part: personal websites are a subset of the group website. So want the group website to output to `www2019/` while personal websites should output to `www2019/~flip/`.

This means one has to set the `publishDir` `config.toml` variable carefully in each website. 

By doing this, the group website and the personal websites are independent static websites.
