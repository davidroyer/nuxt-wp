# Nuxt WP

Overview for using Wordpress as a headless CMS, specifically with Nuxt.js

## Wordpress Information - Backend (CMS)

### Plugins Used in Wordpress

- Advanced Custom Fields
- ACF to REST API
- WP-REST-API V2 Menus
- Custom Post Type UI
- JAMstack Deployments

## My Customizations

There is `wpapi-inc` which includes a file for each for each of the Customizations added to Wordpress. This will eventually be a plugin probably.

### CPT Rest Support

Gets all post types and registers it to be in rest-api

---

## Front-End Information

### WpApi Service Class

Handles logic for getting site info, posts, & pages. `@/lib/WpApi.js`

### Generating Site

Using Nuxt's `generate` feature to get posts and pages from API and generate them for a statically built site
