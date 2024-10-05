# Emoji Catalog

**A powerful, fast, and feature-rich emoji browsing application.** Browse, search, and compare emojis from various platforms such as Google, Twitter, and Noto. Change styles dynamically, filter by categories, and get smart search suggestions powered by Fuse.js. Explore emoji colors and averages to enhance your emoji-related projects, whether for design, analysis, or simply browsing through the vast emoji catalog like you would on **Emojipedia** or **Wikipedia**.

## 🔗 GitHub Pages Link
[Emoji Browser Live Demo](https://your-github-username.github.io/emoji-browser/)

## 🌟 Features
- **Comprehensive Emoji Browsing:** View emojis in different styles from Google, Twitter, Noto, and default platform styles, including platform comparisons, much like a detailed **emoji list** on popular **emoji finders**.
- **Advanced Search & Filtering:** Search intelligently by keywords, names, glyphs, aliases, Unicode, or color average, with fast fuzzy search suggestions powered by Fuse.js, making your emoji search experience feel like a professional **emoji database**.
- **Emoji Color Averages:** Discover the average color of each emoji, helping with design, theming, or data visualization tasks.
- **Clipboard Copying:** One-click to copy emoji glyphs or Unicode characters, useful for developers or anyone maintaining their own **emoji finder** or **emoji search** tool.
- **Style & Skin Tone Variations:** Easily toggle between Google, Twitter, and Noto styles, with support for browsing skin tone variations, expanding your emoji options just like popular emoji apps.
- **Single Page App:** Instant load time with preloaded emoji data for a seamless experience, allowing fast access to a rich **emoji catalog** similar to what you'd expect from well-known platforms.

## 📊 Data Sources
- [GitHub Gemoji](https://raw.githubusercontent.com/github/gemoji/refs/heads/master/db/emoji.json)
- [Emoji Mart](https://cdn.jsdelivr.net/npm/@emoji-mart/data)
- [Cal Henderson Emoji Data](https://raw.githubusercontent.com/iamcal/emoji-data/refs/heads/master/emoji.json)
- **Custom Merged Data:** Combined in `data/merged_emoji_data.json` and `data/regional-emoji-data.json`.

## 📷 Cover Image
![Cover Image](https://your-github-username.github.io/emoji-browser/assets/cover.png)

## 📦 Dependencies
- [Fuse.js](https://cdnjs.cloudflare.com/ajax/libs/fuse.js/6.4.6/fuse.min.js): Fuzzy search library for smart suggestions.
- [Twemoji](https://github.com/jdecked/twemoji): Twitter emoji display support.
- **Google Fonts:** Includes Noto and Noto Color for displaying emoji glyphs.

## 📁 Using the Emoji Data

You can use the combined emoji data from our project for your own applications. The merged data is available via the following CDN link:

### CDN URL
```html
https://your-github-username.github.io/emoji-browser/data/merged_emoji_data.json
```

### Data Structure
Each emoji entry in the JSON file contains a variety of fields. Here's an example of what the structure looks like:

```json
[
    {
        "name": "SMILING FACE WITH OPEN MOUTH",
        "unified": "1F603",
        "non_qualified": null,
        "docomo": "E6F0",
        "au": "E471",
        "softbank": "E057",
        "google": "FE330",
        "image": "1f603.png",
        "sheet_x": 32,
        "sheet_y": 49,
        "short_name": "smiley",
        "short_names": [
          "smiley"
        ],
        "text": ":)",
        "texts": [
          "=)",
          "=-)"
        ],
        "category": "Smileys & Emotion",
        "subcategory": "face-smiling",
        "sort_order": 2,
        "added_in": "0.6",
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_facebook": true,
        "keywords": [
          "smiley",
          "happy",
          "joy",
          "haha",
          ":D",
          ":)",
          "smile",
          "funny"
        ],
        "emoticons": [
          ":)",
          "=)",
          "=-)"
        ],
        "native": "😃",
        "aliases": [
          "smiley"
        ],
        "description": "grinning face with big eyes",
        "colorAverage": "rgb(243, 189, 59)"
    },
    ...
]
```

### Key Fields Explained
- **`name`**: The full name of the emoji.
- **`unified`**: The Unicode representation of the emoji.
- **`non_qualified`**: Alternative Unicode representation if applicable.
- **`docomo`**, **`au`**, **`softbank`**, **`google`**: Platform-specific codes for the emoji.
- **`image`**: The image file name if an image is available.
- **`sheet_x`** and **`sheet_y`**: Coordinates for sprite sheets.
- **`short_name`** and **`short_names`**: Common short names used for the emoji, helping with quick lookups, much like **emoji lists** on other platforms.
- **`text`** and **`texts`**: Textual representations or emoticons for the emoji.
- **`category`** and **`subcategory`**: Categorization of the emoji.
- **`sort_order`**: The order in which the emoji appears within its category.
- **`added_in`**: The version in which the emoji was added.
- **`has_img_apple`**, **`has_img_google`**, **`has_img_twitter`**, **`has_img_facebook`**: Boolean flags indicating if the emoji is supported by major platforms like Apple, Google, Twitter, or Facebook.
- **`keywords`**: Related search terms to help find the emoji, use emojji keywords for fast lookup.
- **`emoticons`**: Common emoticon representations of the emoji.
- **`native`**: The native emoji character.
- **`aliases`**: Alternative names for the emoji.
- **`description`**: A brief description of the emoji.
- **`colorAverage`**: The average color of the emoji in RGB format (e.g., `rgb(243, 189, 59)`). Useful for design and analysis purposes, similar to color data found in popular emoji databases.

Feel free to explore and use the emoji JSON data for your projects, whether you're integrating emoji colors into your design tools or leveraging emoji data for your applications.

## 📄 License

### 💽 Emoji Data
The emoji data used in this project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You can find the full license text in the [`LICENSE-data`](LICENSE-data) file.

### 🖥️ Emoji Catalog Application
The Emoji Catalog application itself is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0). Please refer to the [`LICENSE-app`](LICENSE-app) file for more details.

**Note:** While the emoji data is freely available under the MIT License, the application code is distributed under the Apache License 2.0. Ensure you review both licenses to understand your rights and obligations when using or modifying this project.

---
