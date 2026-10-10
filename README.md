# renrmt.github.io

Personal hub site: projects, blog and links to everything else hosted on this GitHub Pages domain. Built with Jekyll 4.4 and the Getij theme, deployed by GitHub Actions (`.github/workflows/pages.yml`).

Project sites in other repos (`/iati-scout/`, `/style_guide/`, `/color-picker/` and so on) are served by GitHub alongside this one. Never create a folder here with the same name as one of those repos.

## Content

| What | Where |
|---|---|
| Site title, navigation, sidebar links | `_config.yml` |
| Projects | `_projects/<name>.md`, one file each (fields below) |
| Blog posts | `_posts/YYYY-MM-DD-title.md`; drafts in `_drafts/` |
| Home intro | `index.md` |
| About | `about.md` |

**Project fields:** `title`, `track` (`work` or `play`), `summary`, `started` (`"YYYY-MM"`), `tags`, `repo`, `live` (optional), `image` (optional), `featured` (shown on the home page).

**Post fields:** `title`, `description`, `tags`, and optionally `project` (a project's file name without `.md`) to link the post to that project.

Cards link to a project's `live` URL, or to its `repo` if there is none. To give each project its own page at `/projects/<name>/`, set `output: true` for the `projects` collection in `_config.yml` and add `_layouts/project.html`. Cards and post links then point there automatically, and the Markdown body of each project file becomes the page content.

## Theme

Getij: teal sidebar layout with coral accents, light and dark mode. Fonts are IBM Plex Sans and IBM Plex Mono from Google Fonts. Colours and fonts are CSS variables at the top of `assets/css/getij.css`.

## Run locally (Windows)

1. Install Ruby 3.4 with [RubyInstaller](https://rubyinstaller.org/) (with DevKit).
2. `bundle install`
3. `bundle exec jekyll serve --livereload` (add `--drafts` to preview drafts)

After the first `bundle install`, run `bundle lock --add-platform x86_64-linux` and commit `Gemfile.lock` so the Actions build uses the same gem versions.

## Deploy

Pushing to `main` builds and deploys. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
