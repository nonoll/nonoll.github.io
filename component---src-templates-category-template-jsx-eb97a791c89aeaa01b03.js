(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1Jpo":function(t,e,a){"use strict";var r=a("q1tI"),o=a.n(r),n=a("+ZDr"),s=a.n(n),p=a("wd/R"),c=a.n(p);a("/3mp");var i=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props.data.node.frontmatter,e=t.title,a=t.date,r=t.category,n=t.description,p=this.props.data.node.fields,i=p.slug,l=p.categorySlug;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__meta"},o.a.createElement("time",{className:"post__meta-time",dateTime:c()(a).format("MMMM D, YYYY")},c()(a).format("DD MMMM YYYY")),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("span",{className:"post__meta-category",key:l},o.a.createElement(s.a,{to:l,className:"post__meta-category-link"},r))),o.a.createElement("h2",{className:"post__title"},o.a.createElement(s.a,{className:"post__title-link",to:i},e)),o.a.createElement("p",{className:"post__description",dangerouslySetInnerHTML:{__html:n}}),o.a.createElement(s.a,{className:"post__readmore",to:i},"Read"))},r}(o.a.Component);e.a=i},nz5Z:function(t,e,a){"use strict";a.r(e);var r=a("q1tI"),o=a.n(r),n=a("TJpk"),s=a.n(n),p=a("kfNp"),c=a("1Jpo");var i=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=[],e=this.props.category.category;return this.props.posts.forEach((function(e){t.push(o.a.createElement(c.a,{data:e,key:e.node.fields.slug}))})),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement("div",{className:"page"},o.a.createElement("h1",{className:"page__title"},e),o.a.createElement("div",{className:"page__body"},t))))},r}(o.a.Component);a.d(e,"pageQuery",(function(){return m}));var l=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props.data.site.siteMetadata.title,e=this.props.pathContext.category,a=this.props.data.allMarkdownRemark.edges;return o.a.createElement("div",null,o.a.createElement(s.a,{title:e+" - "+t}),o.a.createElement(p.a,{siteMetadata:this.props.data.site.siteMetadata}),o.a.createElement(i,{category:e,posts:a}))},r}(o.a.Component),m=(e.default=l,"2828231578")}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-eb97a791c89aeaa01b03.js.map