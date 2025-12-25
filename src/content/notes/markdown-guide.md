---
title: "Panduan Penulisan Artikel Catatan"
category: "Guide"
publishedDate: 2025-06-28
status: "published"
title_en: "Article Writing Guide for Notes"
title_id: "Panduan Penulisan Artikel Catatan"
category_en: "Guide"
category_id: "Panduan"
summary: "Panduan lengkap cara menulis artikel markdown dengan format yang benar untuk website ini."
summary_en: "Complete guide on how to write markdown articles with correct format for this website."
summary_id: "Panduan lengkap cara menulis artikel markdown dengan format yang benar untuk website ini."
tags: ["markdown", "writing", "guide"]
tags_en: ["markdown", "writing", "guide"]
tags_id: ["markdown", "menulis", "panduan"]
content_en: |
  # Article Writing Guide for Notes

  Complete guide for writing articles on this website with the correct format.

  ---

  ## Website Overview

  This website uses:
  - **Framework**: Astro (SSR)
  - **Styling**: CSS with CSS variables
  - **Content**: Markdown with frontmatter
  - **Bilingual**: English and Indonesian language support
  - **Hosting**: Netlify

  ---

  ## File Structure

  All articles are stored in the folder:
  ```
  src/content/notes/
  ```

  **File Naming:**
  - Use kebab-case format (lowercase with hyphens)
  - Example: `getting-started-with-react.md`
  - Avoid: spaces, underscores, or capital letters

  ---

  ## Complete Frontmatter Format

  Each article must start with frontmatter (metadata) enclosed in dashes `---`:

  ```yaml
  ---
  title: "Default Article Title"
  title_en: "English Article Title"
  title_id: "Indonesian Article Title"
  category: "Category Name"
  category_en: "Category Name"
  category_id: "Nama Kategori Indonesia"
  status: "published"
  publishedDate: 2024-01-21
  summary: "Brief article description in Indonesian."
  summary_en: "Brief article description in English."
  summary_id: "Deskripsi singkat artikel dalam bahasa Indonesia."
  tags: ["tag1", "tag2", "tag3"]
  tags_en: ["tag1", "tag2", "tag3"]
  tags_id: ["tag1", "tag2", "tag3"]
  content_en: |
    # English Content Here
    This is the English version...

  content_id: |
    # Konten Indonesia di sini
    Ini versi bahasa Indonesia...
  ---
  ```

  ### Field Explanation

  | Field | Type | Required | Description |
  |-------|------|----------|-------------|
  | `title` | String | Yes | Default title (fallback) |
  | `title_en` | String | Yes | English title |
  | `title_id` | String | Yes | Indonesian title |
  | `category` | String | Yes | Default category |
  | `category_en` | String | Yes | English category |
  | `category_id` | String | Yes | Indonesian category |
  | `status` | String | Yes | Must be `"published"` to appear |
  | `publishedDate` | String | Yes | Format: `YYYY-MM-DD` |
  | `summary` | String | No | Indonesian summary |
  | `summary_en` | String | No | English summary |
  | `summary_id` | String | No | Indonesian summary |
  | `tags` | Array | No | Indonesian tags |
  | `tags_en` | Array | No | English tags |
  | `tags_id` | Array | No | Indonesian tags |
  | `headerImage` | String | No | Path to header image |
  | `content_en` | String | No | Full English content |
  | `content_id` | String | No | Full Indonesian content |

  ---

  ## Available Categories

  Commonly used categories:

  | English | Indonesia |
  |---------|-----------|
  | Tutorial | Tutorial |
  | Guide | Panduan |
  | Tips | Tips |
  | Learning | Belajar |
  | Architecture | Arsitektur |
  | Programming | Pemrograman |
  | Writing | Penulisan |

  ---

  ## Article Content Structure

  After frontmatter, write article content using Markdown format. You have two options:

  ### Option 1: Bilingual Content Fields (Recommended)

  Put content in `content_en` and `content_id` fields:

  ```yaml
  ---
  title: "Learning React"
  title_en: "Learning React"
  title_id: "Belajar React"
  category: "Tutorial"
  category_en: "Tutorial"
  category_id: "Tutorial"
  status: "published"
  publishedDate: 2024-01-21
  content_en: |
    # Learning React

    React is a JavaScript library for building user interfaces.

    ## What is React?

    React was created by Facebook...
  content_id: |
    # Belajar React

    React adalah library JavaScript untuk membangun antarmuka pengguna.

    ## Apa itu React?

    React dibuat oleh Facebook...
  ---
  ```

  ### Option 2: Body Content

  Write content directly in the markdown body (will be used for both languages):

  ```yaml
  ---
  title: "Learning React"
  title_en: "Learning React"
  title_id: "Belajar React"
  category: "Tutorial"
  category_en: "Tutorial"
  category_id: "Tutorial"
  status: "published"
  publishedDate: 2024-01-21
  ---

  # Learning React

  This content will be shown for both English and Indonesian versions.
  ```

  ---

  ## Basic Markdown Syntax

  ### Headings

  ```markdown
  # Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6
  ```

  ### Text Formatting

  ```markdown
  **Bold Text**
  *Italic Text*
  ***Bold and Italic***
  ~~Strikethrough Text~~
  `Inline Code`
  ```

  ### Lists

  **Unordered:**
  ```markdown
  - Item 1
  - Item 2
    - Sub-item
    - Another sub-item
  - Item 3
  ```

  **Ordered:**
  ```markdown
  1. First step
  2. Second step
  3. Third step
  ```

  ### Links

  ```markdown
  [Link text](https://example.com)
  [Link to another article](/article-name)
  ```

  ### Images

  ```markdown
  ![Alt text](/images/image.jpg)
  ![Description](https://example.com/image.png)
  ```

  ### Code Blocks

  ```markdown
  ```javascript
  function greet(name) {
    return `Hello, ${name}!`;
  }
  ```
  ```

  ### Blockquotes

  ```markdown
  > This is a blockquote.
  >
  > Can span multiple lines.
  >
  > And include **formatting** too.
  ```

  ### Tables

  ```markdown
  | Column 1 | Column 2 | Column 3 |
  |----------|----------|----------|
  | Data 1   | Data 2   | Data 3   |
  | Data 4   | Data 5   | Data 6   |
  ```

  ### Horizontal Rule

  ```markdown
  ---
  ```

  ---

  ## Complete Article Example

  Here's a complete article ready to use:

  ```yaml
  ---
  title: "Building REST API with Node.js"
  title_en: "Building REST API with Node.js"
  title_id: "Membangun REST API dengan Node.js"
  category: "Tutorial"
  category_en: "Tutorial"
  category_id: "Tutorial"
  status: "published"
  publishedDate: 2024-01-21
  summary: "Learn how to create REST API using Node.js, Express, and MongoDB."
  summary_en: "Learn how to create REST API using Node.js, Express, and MongoDB."
  summary_id: "Pelajari cara membuat REST API menggunakan Node.js, Express, dan MongoDB."
  tags: ["nodejs", "express", "api", "mongodb"]
  tags_en: ["nodejs", "express", "api", "mongodb"]
  tags_id: ["nodejs", "express", "api", "mongodb"]
  content_en: |
    # Building REST API with Node.js

    REST API is an essential part of modern web development. In this tutorial, we'll learn how to create a REST API using Node.js and Express.

    ## Prerequisites

    Make sure you have installed:
    - Node.js (v18 or higher)
    - npm or yarn
    - MongoDB (or MongoDB Atlas)

    ## Project Setup

    ### 1. Initialize Project

    Create a new folder and initialize the project:

    ```bash
    mkdir my-api
    cd my-api
    npm init -y
    ```

    ### 2. Install Dependencies

    ```bash
    npm install express mongoose dotenv cors
    npm install --save-dev nodemon
    ```

    ## Creating the Server

    ### 1. Basic Server

    Create `server.js`:

    ```javascript
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    require('dotenv').config();

    const app = express();

    // Middleware
    app.use(cors());
    app.use(express.json());

    // Database connection
    mongoose.connect(process.env.MONGODB_URI)
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.error(err));

    // Routes
    app.get('/', (req, res) => {
      res.json({ message: 'Welcome to API' });
    });

    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    ```

    ### 2. Environment Variables

    Create `.env`:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/mydb
    ```

    ## Creating Models

    Create `models` folder and `User.js`:

    ```javascript
    const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      age: Number,
      createdAt: {
        type: Date,
        default: Date.now
      }
    });

    module.exports = mongoose.model('User', userSchema);
    ```

    ## Creating Routes

    Create `routes` folder and `userRoutes.js`:

    ```javascript
    const express = require('express');
    const router = express.Router();
    const User = require('../models/User');

    // GET all users
    router.get('/', async (req, res) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // POST create user
    router.post('/', async (req, res) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
      });

      try {
        const newUser = await user.save();
        res.status(201).json(newUser);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    // GET single user
    router.get('/:id', async (req, res) => {
      try {
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // UPDATE user
    router.put('/:id', async (req, res) => {
      try {
        const user = await User.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    // DELETE user
    router.delete('/:id', async (req, res) => {
      try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    module.exports = router;
    ```

    ## Update Server

    Update `server.js` to use routes:

    ```javascript
    const userRoutes = require('./routes/userRoutes');

    // Use routes
    app.use('/api/users', userRoutes);
    ```

    ## Testing the API

    Use Postman, Insomnia, or curl for testing:

    ### GET all users
    ```bash
    curl http://localhost:5000/api/users
    ```

    ### POST new user
    ```bash
    curl -X POST http://localhost:5000/api/users \
      -H "Content-Type: application/json" \
      -d '{"name":"John","email":"john@example.com","age":30}'
    ```

    ### GET single user
    ```bash
    curl http://localhost:5000/api/users/<id>
    ```

    ### UPDATE user
    ```bash
    curl -X PUT http://localhost:5000/api/users/<id> \
      -H "Content-Type: application/json" \
      -d '{"name":"John Doe"}'
    ```

    ### DELETE user
    ```bash
    curl -X DELETE http://localhost:5000/api/users/<id>
    ```

    ## Best Practices

    ### 1. Error Handling

    Always use try-catch for async operations:

    ```javascript
    try {
      const result = await someOperation();
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    ```

    ### 2. Input Validation

    Validate input before processing:

    ```javascript
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({ message: 'Name and email required' });
    }
    ```

    ### 3. Environment Variables

    Don't hardcode sensitive data:

    ```javascript
    // ❌ Bad
    const dbPassword = 'mypassword';

    // ✅ Good
    const dbPassword = process.env.DB_PASSWORD;
    ```

    ### 4. HTTP Methods

    Use appropriate HTTP methods:
    - `GET` - Retrieve data
    - `POST` - Create new data
    - `PUT` - Update complete data
    - `PATCH` - Partial update
    - `DELETE` - Delete data

    ### 5. Status Codes

    Use correct status codes:
    - `200` - OK
    - `201` - Created
    - `400` - Bad Request
    - `404` - Not Found
    - `500` - Server Error

    ## Conclusion

    Building REST API with Node.js and Express is quite straightforward. By following these best practices, you can create maintainable and scalable APIs.

    ## References

    - [Express Documentation](https://expressjs.com/)
    - [Mongoose Documentation](https://mongoosejs.com/)
    - [REST API Best Practices](https://restfulapi.net/)
  content_id: |
    # Membangun REST API dengan Node.js

    REST API adalah bagian penting dari pengembangan web modern. Dalam tutorial ini, kita akan mempelajari cara membuat REST API menggunakan Node.js dan Express.

    ## Persiapan

    Pastikan Anda telah menginstall:
    - Node.js (v18 atau lebih tinggi)
    - npm atau yarn
    - MongoDB (atau MongoDB Atlas)

    ## Persiapan Project

    ### 1. Inisialisasi Project

    Buat folder baru dan inisialisasi project:

    ```bash
    mkdir my-api
    cd my-api
    npm init -y
    ```

    ### 2. Install Dependencies

    ```bash
    npm install express mongoose dotenv cors
    npm install --save-dev nodemon
    ```

    ## Membuat Server

    ### 1. Basic Server

    Buat file `server.js`:

    ```javascript
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    require('dotenv').config();

    const app = express();

    // Middleware
    app.use(cors());
    app.use(express.json());

    // Database connection
    mongoose.connect(process.env.MONGODB_URI)
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.error(err));

    // Routes
    app.get('/', (req, res) => {
      res.json({ message: 'Welcome to API' });
    });

    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    ```

    ### 2. Environment Variables

    Buat file `.env`:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/mydb
    ```

    ## Membuat Model

    Buat folder `models` dan file `User.js`:

    ```javascript
    const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      age: Number,
      createdAt: {
        type: Date,
        default: Date.now
      }
    });

    module.exports = mongoose.model('User', userSchema);
    ```

    ## Membuat Routes

    Buat folder `routes` dan file `userRoutes.js`:

    ```javascript
    const express = require('express');
    const router = express.Router();
    const User = require('../models/User');

    // GET all users
    router.get('/', async (req, res) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // POST create user
    router.post('/', async (req, res) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
      });

      try {
        const newUser = await user.save();
        res.status(201).json(newUser);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    // GET single user
    router.get('/:id', async (req, res) => {
      try {
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // UPDATE user
    router.put('/:id', async (req, res) => {
      try {
        const user = await User.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    // DELETE user
    router.delete('/:id', async (req, res) => {
      try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    module.exports = router;
    ```

    ## Update Server

    Update `server.js` untuk menggunakan routes:

    ```javascript
    const userRoutes = require('./routes/userRoutes');

    // Use routes
    app.use('/api/users', userRoutes);
    ```

    ## Testing API

    Gunakan Postman, Insomnia, atau curl untuk testing:

    ### GET semua users
    ```bash
    curl http://localhost:5000/api/users
    ```

    ### POST user baru
    ```bash
    curl -X POST http://localhost:5000/api/users \
      -H "Content-Type: application/json" \
      -d '{"name":"John","email":"john@example.com","age":30}'
    ```

    ### GET single user
    ```bash
    curl http://localhost:5000/api/users/<id>
    ```

    ### UPDATE user
    ```bash
    curl -X PUT http://localhost:5000/api/users/<id> \
      -H "Content-Type: application/json" \
      -d '{"name":"John Doe"}'
    ```

    ### DELETE user
    ```bash
    curl -X DELETE http://localhost:5000/api/users/<id>
    ```

    ## Best Practices

    ### 1. Error Handling

    Selalu gunakan try-catch untuk async operations:

    ```javascript
    try {
      const result = await someOperation();
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    ```

    ### 2. Input Validation

    Validasi input sebelum diproses:

    ```javascript
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({ message: 'Name and email required' });
    }
    ```

    ### 3. Environment Variables

    Jangan hardcode sensitive data:

    ```javascript
    // ❌ Bad
    const dbPassword = 'mypassword';

    // ✅ Good
    const dbPassword = process.env.DB_PASSWORD;
    ```

    ### 4. HTTP Methods

    Gunakan HTTP method yang sesuai:
    - `GET` - Mengambil data
    - `POST` - Membuat data baru
    - `PUT` - Update data lengkap
    - `PATCH` - Update sebagian
    - `DELETE` - Hapus data

    ### 5. Status Codes

    Gunakan status code yang tepat:
    - `200` - OK
    - `201` - Created
    - `400` - Bad Request
    - `404` - Not Found
    - `500` - Server Error

    ## Kesimpulan

    Membangun REST API dengan Node.js dan Express cukup straightforward. Dengan mengikuti best practices ini, Anda bisa membuat API yang maintainable dan scalable.

    ## Referensi

    - [Express Documentation](https://expressjs.com/)
    - [Mongoose Documentation](https://mongoosejs.com/)
    - [REST API Best Practices](https://restfulapi.net/)
  ---
  ```

  ---

  ## Tips for Writing Good Articles

  ### 1. Start with an Outline

  Create an article outline before writing:

  1. Introduction - explain what and why
  2. Prerequisites - what's needed
  3. Steps - follow logical order
  4. Examples - give real examples
  5. Conclusion - summarize key points

  ### 2. Use Clear Code Blocks

  Always include:
  - Programming language (syntax highlighting)
  - Explanatory comments
  - Expected output

  ````markdown
  ```javascript
  // This is an example function
  function add(a, b) {
    return a + b; // Returns sum result
  }

  // Output: 5
  console.log(add(2, 3));
  ```
  ````

  ### 3. Break Content with Headings

  Use headings to break up content:
  - H2 for main sections
  - H3 for subsections
  - H4 for sub-subsections

  ### 4. Add Images (Optional)

  If article needs visualization:
  - Screenshots
  - Diagrams
  - Illustrations

  ### 5. Cross-Link to Other Articles

  Link to related articles:

  ```markdown
  See also [Building REST API](/article-name) for more information.
  ```

  ---

  ## Pre-Publish Checklist

  - [ ] Frontmatter complete and correct
  - [ ] Status set to `"published"`
  - [ ] Date in `YYYY-MM-DD` format
  - [ ] All bilingual fields filled
  - [ ] Code blocks have syntax highlighting
  - [ ] Internal and external links work
  - [ ] Images have alt text
  - [ ] Article preview tested first
  - [ ] No typos/grammar errors

  ---

  ## Troubleshooting

  ### Article not appearing?

  **Solution:**
  1. Make sure `status: "published"`
  2. Check date format `YYYY-MM-DD`
  3. Ensure filename uses kebab-case
  4. Refresh browser / clear cache

  ### Format not working?

  **Solution:**
  1. Check markdown syntax
  2. Ensure code blocks use 3 backticks
  3. Check quotes and escape characters

  ### Images not appearing?

  **Solution:**
  1. Make sure image path is correct
  2. Images are in `public/images/` folder
  3. Use relative path from root

  ---

  ## Helpful Tools

  ### Markdown Editors

  - **VS Code** - With Markdown extension
  - **Typora** - WYSIWYG markdown editor
  - **Obsidian** - For managing notes

  ### Online Preview

  - [StackEdit](https://stackedit.io/)
  - [Dillinger](https://dillinger.io/)

  ### Markdown Cheatsheet

  - [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
  - [Markdown Guide](https://www.markdownguide.org/)

  ---

  ## Conclusion

  Writing articles for this website is straightforward if following the specified format. Key points:

  1. **Complete frontmatter** - ensure all fields filled
  2. **Consistent format** - follow same structure
  3. **Quality content** - provide value to readers
  4. **Testing** - preview before publish

  Happy writing!
content_id: |
  # Panduan Penulisan Artikel Catatan

  Panduan lengkap untuk menulis artikel di website ini dengan format yang benar.

  ---

  ## Gambaran Umum Website

  Website ini menggunakan:
  - **Framework**: Astro (SSR)
  - **Styling**: CSS dengan variabel CSS
  - **Konten**: Markdown dengan frontmatter
  - **Bilingual**: Dukungan Bahasa Inggris dan Indonesia
  - **Hosting**: Netlify

  ---

  ## Struktur File

  Semua artikel disimpan dalam folder:
  ```
  src/content/notes/
  ```

  **Penamaan File:**
  - Gunakan format kebab-case (huruf kecil dengan tanda hubung)
  - Contoh: `getting-started-with-react.md`
  - Hindari: spasi, underscore, atau huruf kapital

  ---

  ## Format Frontmatter Lengkap

  Setiap artikel harus dimulai dengan frontmatter (metadata) yang diapit tanda dash `---`:

  ```yaml
  ---
  title: "Judul Artikel Default"
  title_en: "English Article Title"
  title_id: "Judul Artikel Indonesia"
  category: "Nama Kategori"
  category_en: "Category Name"
  category_id: "Nama Kategori Indonesia"
  status: "published"
  publishedDate: 2024-01-21
  summary: "Deskripsi singkat artikel dalam bahasa Indonesia."
  summary_en: "Brief article description in English."
  summary_id: "Deskripsi singkat artikel dalam bahasa Indonesia."
  tags: ["tag1", "tag2", "tag3"]
  tags_en: ["tag1", "tag2", "tag3"]
  tags_id: ["tag1", "tag2", "tag3"]
  content_en: |
    # Konten English di sini
    Ini versi bahasa Inggris...

  content_id: |
    # Konten Indonesia di sini
    Ini versi bahasa Indonesia...
  ---
  ```

  ### Penjelasan Field

  | Field | Tipe | Wajib | Deskripsi |
  |-------|------|-------|-----------|
  | `title` | String | Ya | Judul default (fallback) |
  | `title_en` | String | Ya | Judul bahasa Inggris |
  | `title_id` | String | Ya | Judul bahasa Indonesia |
  | `category` | String | Ya | Kategori default |
  | `category_en` | String | Ya | Kategori bahasa Inggris |
  | `category_id` | String | Ya | Kategori bahasa Indonesia |
  | `status` | String | Ya | Harus `"published"` agar muncul |
  | `publishedDate` | String | Ya | Format: `YYYY-MM-DD` |
  | `summary` | String | Tidak | Ringkasan bahasa Indonesia |
  | `summary_en` | String | Tidak | Ringkasan bahasa Inggris |
  | `summary_id` | String | Tidak | Ringkasan bahasa Indonesia |
  | `tags` | Array | Tidak | Tag bahasa Indonesia |
  | `tags_en` | Array | Tidak | Tag bahasa Inggris |
  | `tags_id` | Array | Tidak | Tag bahasa Indonesia |
  | `headerImage` | String | Tidak | Path ke gambar header |
  | `content_en` | String | Tidak | Konten lengkap bahasa Inggris |
  | `content_id` | String | Tidak | Konten lengkap bahasa Indonesia |

  ---

  ## Kategori yang Tersedia

  Berikut kategori yang umum digunakan:

  | English | Indonesia |
  |---------|-----------|
  | Tutorial | Tutorial |
  | Guide | Panduan |
  | Tips | Tips |
  | Learning | Belajar |
  | Architecture | Arsitektur |
  | Programming | Pemrograman |
  | Writing | Penulisan |

  ---

  ## Struktur Konten Artikel

  Setelah frontmatter, tulis konten artikel menggunakan format Markdown. Anda memiliki dua opsi:

  ### Opsi 1: Field Konten Bilingual (Disarankan)

  Masukkan konten dalam field `content_en` dan `content_id`:

  ```yaml
  ---
  title: "Belajar React"
  title_en: "Learning React"
  title_id: "Belajar React"
  category: "Tutorial"
  category_en: "Tutorial"
  category_id: "Tutorial"
  status: "published"
  publishedDate: 2024-01-21
  content_en: |
    # Learning React

    React is a JavaScript library for building user interfaces.

    ## What is React?

    React was created by Facebook...
  content_id: |
    # Belajar React

    React adalah library JavaScript untuk membangun antarmuka pengguna.

    ## Apa itu React?

    React dibuat oleh Facebook...
  ---
  ```

  ### Opsi 2: Konten Body

  Tulis konten langsung di body markdown (akan digunakan untuk kedua bahasa):

  ```yaml
  ---
  title: "Belajar React"
  title_en: "Learning React"
  title_id: "Belajar React"
  category: "Tutorial"
  category_en: "Tutorial"
  category_id: "Tutorial"
  status: "published"
  publishedDate: 2024-01-21
  ---

  # Belajar React

  Konten ini akan ditampilkan untuk versi bahasa Inggris dan Indonesia.
  ```

  ---

  ## Sintaks Markdown Dasar

  ### Heading

  ```markdown
  # Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6
  ```

  ### Teks Formatting

  ```markdown
  **Teks Tebal**
  *Teks Miring*
  ***Tebal dan Miring***
  ~~Teks Dicoret~~
  `Inline Code`
  ```

  ### List

  **Tidak Berurutan:**
  ```markdown
  - Item 1
  - Item 2
    - Sub-item
    - Sub-item lagi
  - Item 3
  ```

  **Berurutan:**
  ```markdown
  1. Langkah pertama
  2. Langkah kedua
  3. Langkah ketiga
  ```

  ### Link

  ```markdown
  [Teks link](https://example.com)
  [Link ke artikel lain](/nama-artikel)
  ```

  ### Gambar

  ```markdown
  ![Alt text](/images/gambar.jpg)
  ![Deskripsi](https://example.com/image.png)
  ```

  ### Code Block

  **Contoh code block:**
  ````markdown
  ```javascript
  function greet(name) {
    return `Hello, ${name}!`;
  }
  ```
  ````

  ### Blockquote

  ```markdown
  > Ini adalah blockquote.
  >
  > Bisa mencakup beberapa baris.
  >
  > Dan berisi **formatting** juga.
  ```

  ### Table

  ```markdown
  | Kolom 1 | Kolom 2 | Kolom 3 |
  |---------|---------|---------|
  | Data 1  | Data 2  | Data 3  |
  | Data 4  | Data 5  | Data 6  |
  ```

  ### Horizontal Rule

  ```markdown
  ---
  ```

  ---

  ## Contoh Artikel Lengkap

  Berikut contoh artikel lengkap yang siap digunakan:

  ```yaml
  ---
  title: "Building REST API with Node.js"
  title_en: "Building REST API with Node.js"
  title_id: "Membangun REST API dengan Node.js"
  category: "Tutorial"
  category_en: "Tutorial"
  category_id: "Tutorial"
  status: "published"
  publishedDate: 2024-01-21
  summary: "Learn how to create REST API using Node.js, Express, and MongoDB."
  summary_en: "Learn how to create REST API using Node.js, Express, and MongoDB."
  summary_id: "Pelajari cara membuat REST API menggunakan Node.js, Express, dan MongoDB."
  tags: ["nodejs", "express", "api", "mongodb"]
  tags_en: ["nodejs", "express", "api", "mongodb"]
  tags_id: ["nodejs", "express", "api", "mongodb"]
  content_en: |
    # Building REST API with Node.js

    REST API is an essential part of modern web development...

    [English content continues...]
  content_id: |
    # Membangun REST API dengan Node.js

    REST API adalah bagian penting dari pengembangan web modern...

    [Indonesian content continues...]
  ---
  ```

  ---

  ## Tips Penulisan Artikel yang Baik

  ### 1. Mulai dengan Outline

  Buat outline artikel sebelum menulis:

  1. Pendahuluan - jelaskan apa dan kenapa
  2. Prasyarat - apa yang dibutuhkan
  3. Langkah-langkah - ikuti urutan logis
  4. Contoh - berikan contoh nyata
  5. Kesimpulan - rangkuman poin penting

  ### 2. Gunakan Code Block yang Jelas

  Selalu sertakan:
  - Bahasa pemrograman (syntax highlighting)
  - Comment yang menjelaskan
  - Output yang diharapkan

  ````markdown
  ```javascript
  // Ini adalah contoh fungsi
  function add(a, b) {
    return a + b; // Mengembalikan hasil penjumlahan
  }

  // Output: 5
  console.log(add(2, 3));
  ```
  ````

  ### 3. Break Konten dengan Heading

  Gunakan heading untuk memecah konten:
  - H2 untuk bagian utama
  - H3 untuk sub-bagian
  - H4 untuk sub-sub-bagian

  ### 4. Tambahkan Gambar (Opsional)

  Jika artikel memerlukan visualisasi:
  - Screenshot
  - Diagram
  - Ilustrasi

  ### 5. Cross-Link ke Artikel Lain

  Tautkan ke artikel terkait:

  ```markdown
  Lihat juga [Membangun REST API](/nama-artikel) untuk informasi lebih lanjut.
  ```

  ---

  ## Checklist Sebelum Publish

  - [ ] Frontmatter lengkap dan benar
  - [ ] Status set ke `"published"`
  - [ ] Tanggal dalam format `YYYY-MM-DD`
  - [ ] Semua field bilingual diisi
  - [ ] Code block memiliki syntax highlighting
  - [ ] Link internal dan external berfungsi
  - [ ] Gambar memiliki alt text
  - [ ] Artikel ditest preview terlebih dahulu
  - [ ] Tidak ada typo/kesalahan grammar

  ---

  ## Troubleshooting

  ### Artikel tidak muncul?

  **Solusi:**
  1. Pastikan `status: "published"`
  2. Periksa tanggal format `YYYY-MM-DD`
  3. Cek nama file menggunakan kebab-case
  4. Refresh browser / clear cache

  ### Format tidak berfungsi?

  **Solusi:**
  1. Periksa syntax markdown
  2. Pastikan code block menggunakan 3 backticks
  3. Cek quote dan escape character

  ### Gambar tidak muncul?

  **Solusi:**
  1. Pastikan path gambar benar
  2. Gambar ada di folder `public/images/`
  3. Gunakan path relatif dari root

  ---

  ## Tool yang Membantu

  ### Editor Markdown

  - **VS Code** - Dengan extension Markdown
  - **Typora** - WYSIWYG markdown editor
  - **Obsidian** - Untuk mengelola catatan

  ### Online Preview

  - [StackEdit](https://stackedit.io/)
  - [Dillinger](https://dillinger.io/)

  ### Markdown Cheatsheet

  - [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
  - [Markdown Guide](https://www.markdownguide.org/)

  ---

  ## Kesimpulan

  Menulis artikel di website ini cukup straightforward jika mengikuti format yang sudah ditentukan. Kunci utamanya:

  1. **Frontmatter yang lengkap** - pastikan semua field terisi
  2. **Format yang konsisten** - ikuti struktur yang sama
  3. **Konten berkualitas** - berikan nilai bagi pembaca
  4. **Testing** - preview sebelum publish

  Selamat menulis!
---
