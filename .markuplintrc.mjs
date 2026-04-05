/** @type {import("@markuplint/ml-config").Config} */
export default {
  extends: ['markuplint:recommended-static-html'],
  excludeFiles: ['./node_modules/**', './dist/**'],
  nodeRules: [
    // 本当は track 要素の対応をした方が良いが一旦無効にしている
    {
      selector: 'audio',
      rules: {
        'required-element': false,
      },
    },
  ],
};
