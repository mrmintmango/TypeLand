# Navigation Component System

Your TypeLand site now uses a reusable navigation component! This means you only need to update the navigation in **one file** instead of editing every page.

## How It Works

1. **Navigation Template**: The navigation HTML is stored in `styles/navigation-template.html`
2. **JavaScript Loader**: The `styles/navigation.js` file automatically loads and injects the navigation into every page
3. **Smart Paths**: The `data-nav-base` attribute tells the navigation system what the relative path is from the current page to the root

## Updating Your Pages

To convert any page to use the new navigation component, follow these steps:

### Step 1: Add the data attribute to the body tag

Replace your `<body>` tag with one that includes the `data-nav-base` attribute:

**For pages in the root folder** (e.g., `index.html`):

```html
<body data-nav-base=""></body>
```

**For pages in the `pages/` folder** (e.g., `pages/adventure.html`):

```html
<body data-nav-base="../"></body>
```

**For pages in subfolders** (e.g., `pages/beginners/variables.html`):

```html
<body data-nav-base="../../"></body>
```

### Step 2: Remove the navigation HTML

Delete everything from `<!-- Sidebar Navigation -->` to `<!-- Sidebar Overlay -->`, including:

- The `<nav class="sidebar">` element
- The menu toggle button
- The sidebar overlay div

### Step 3: Add a placeholder comment

Add this comment where the navigation used to be:

```html
<body data-nav-base="appropriate-path">
  <!-- Navigation will be loaded here automatically -->

  <!-- Main Content -->
  <div class="content-wrapper" id="contentWrapper"></div>
</body>
```

## Examples

### ✅ Root Level Page (index.html)

```html
<body data-nav-base="">
  <!-- Navigation will be loaded here automatically -->

  <!-- Main Content -->
  <div class="content-wrapper" id="contentWrapper"></div>
</body>
```

### ✅ Pages Folder (pages/resources.html)

```html
<body data-nav-base="../">
  <!-- Navigation will be loaded here automatically -->

  <!-- Main Content -->
  <div class="content-wrapper" id="contentWrapper"></div>
</body>
```

### ✅ Nested Folder (pages/beginners/variables.html)

```html
<body data-nav-base="../../">
  <!-- Navigation will be loaded here automatically -->

  <!-- Main Content -->
  <div class="content-wrapper" id="contentWrapper"></div>
</body>
```

## Updating the Navigation

To change navigation links or structure, **only edit one file**:

- `styles/navigation-template.html`

The changes will automatically appear on all pages!

### Active Link Styling

If you want to highlight the current page in the navigation, you can add JavaScript to detect the current page and add an "active" class. Let me know if you need help with this feature!

## Already Updated

The following pages have already been converted:

- ✅ `index.html`
- ✅ `pages/resources.html`
- ✅ `pages/beginners/variables.html`

## Pages Still Need Updating

You'll want to update the remaining pages using the pattern above:

- All other files in `pages/`
- All other files in `pages/beginners/`
- All other files in `pages/intermediate/`
- All other files in `pages/resources/`
- All other files in `pages/gallery/`
