# HTML Hello

The most basic boilerplate for any 4Geeks Academy student, start your very first website from scratch.

> There is a video tutorial on [how to use this template to create your very first website here](https://youtu.be/dfbDCMu_p-0).

## What to do next?

Create an `index.html` file with the [basic HTML structure](http://4geeks.com/lesson/what-is-html-learn-html#page-structure) and see it live by running a web-server using the following command:

```bash
$ pip3 install flask && python3 server.py
```

- You can create as many HTML files as you want.
- You can also create CSS files and import them into your website using a `<link>` tag placed between the `<head></head>` tags, like this:

```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```

- If you want to use Tailwind CSS, add it optionally via the official Tailwind CSS v4 CDN inside the same `<head>`:

```html
<head>
  ...
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```

### Contributors

This template was built as part of the [Full Stack Developer course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer) at [4Geeks Academy Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and [many other contributors](https://github.com/4GeeksAcademy/html-hello/graphs/contributors).

You can find other templates and resources like this at the [school's GitHub page](https://github.com/4geeksacademy/).

## Reusable Header and Footer Components

The project includes reusable shared components:

- `components/header.html`
- `components/footer.html`
- `assets/validation.js` (search validation only)

To use the same header and footer on any HTML page:

1. Add Tailwind and font links inside your page `<head>`.
2. Copy the markup from `components/header.html` into the top of your `<body>`.
3. Add your page-specific content.
4. Copy the markup from `components/footer.html` at the bottom of your `<body>`.
5. Load `assets/validation.js` before closing `</body>`.

Example setup:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maison Rivage</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Source+Sans+3:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#F6F4EF] text-[#2A2A2A]">
    <!-- Paste components/header.html -->

    <main>
      <!-- Page-specific content -->
    </main>

    <!-- Paste components/footer.html -->
    <script src="assets/validation.js"></script>
  </body>
</html>
```
