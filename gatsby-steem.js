const steem = require('steem');
const fs = require('fs');

const config = require('./gatsby-config');

const { author, plugins } = config;

const [ { options: { path: filePath } } ] = plugins.filter(p => p.resolve === 'gatsby-source-filesystem');



function createPost(post) {
  const title = post.title
  const date = new Date(`${post.created}Z`);
  const json_metadata = JSON.parse(post.json_metadata);
  const tags = json_metadata.tags || [];
  const category = json_metadata.category || (title.match(/(?<=^\[)([a-zA-Zㄱ-힣\s]*)(?=\])/g) || ""); //title.match(/(?<=^\[)([^}]*)(?=\])/g)
  const content = [
    '---',
    `title: "${title}"`,
    // `author: ${post.author}`,
    `date: "${post.created}Z"`,
    `layout: post`,
    `draft: false`,
    `path: "${post.url}"`,
    `category: "${category}"`,
    `tags:`,
    ...tags.map(tag => `  - "${tag}"`),
    `description: "${summarizer.summarize(post.body, 2)}"`,
    // `description: "${post.body.replace(/\n/g, ' ').substr(0, 200)}"`,
    '---',
    `${post.body}`
  ]
  const fileName = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${(date.getDate()).toString().padStart(2,'0')}---${post.permlink}`;
  fs.writeFileSync(`${filePath}/articles/${fileName}.md`, content.join('\n'), 'utf8');
}

const LIMIT = 10;

async function updateSteemArticles(username) {
  const result = await steem.api.getDiscussionsByBlogAsync({limit:LIMIT, tag:username}).then(r => r.filter(e => e.author === username));
  for (let i = 0; i < result.length; i++) {
    createPost(result[i]);
  }

  /*
  let received = 0;
  do {
    const startAuthor = posts[posts.length - 1].author;
    const startPermlink = posts[posts.length - 1].permlink;

    const moreResult = await sendAsync(`get_discussions_by_${sortBy}`, [
      { tag, limit, start_author: startAuthor, start_permlink: startPermlink },
    ]);

    posts.push(...moreResult.slice(1));
    received = moreResult.length;
  } while (received === limit);
  */
}

updateSteemArticles('nonoll')