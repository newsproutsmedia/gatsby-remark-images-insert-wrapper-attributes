const nodeMock = {
    type: 'html',
    value: `<span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 720px;
  ">
    <a class="gatsby-resp-image-link" href="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg" style="display: block"
  target="_blank" rel="noopener">
      <span class="gatsby-resp-image-background-image" style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image:
  url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQ
  jhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAXAQEBAQEAAAAAAAA
  AAAAAAAACAQAD/9oADAMBAAIQAxAAAAG7DNiNvMoenSoMVxL/AP/EABsQAAIDAQEBAAAAAAAAAAAAAAECAAMREgQT/9oACAEBAAEFAu881T4itoLM0DQW5LEHzYcsSZ//xAAXEQADAQAAAAAAAAAAA
  AAAAAAAARAR/9oACAEDAQE/AUbf/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ASP/xAAYEAEBAAMAAAAAAAAAAAAAAAABECAxYf/aAAgBAQAGPwI7dYIT/8QAGxAAAwADAQEAAAAAAAA
  AAAAAAAERITFRQXH/2gAIAQEAAT8hcC5wFLXayG2PfGbEPVzfg1IapR9QrQKVbP/aAAwDAQACAAMAAAAQLy9C/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQMBAT8QtOkC7n//xAAZEQEAA
  gMAAAAAAAAAAAAAAAABABARITH/2gAIAQIBAT8QRTcyjyv/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMWFxofH/2gAIAQEAAT8QLONg9y3ItDe41KF5JnQlWnKq/kYQAWDo2DQX5ZRqIrYiNkH2hAm
  GJ//Z&apos;); background-size: cover; display: block;"></span>
      <picture>
      <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/c85cb/test.webp 300w,
      /static/568c5d417f7ef32ba3bb5b95bdf0f42d/e88ff/test.webp 600w,
      /static/568c5d417f7ef32ba3bb5b95bdf0f42d/bc514/test.webp 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/webp">
     <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/f93b5/test.jpg 300w,
      /static/568c5d417f7ef32ba3bb5b95bdf0f42d/b4294/test.jpg 600w,
      /static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/jpeg">
      <img class="gatsby-resp-image-image" src="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg" alt="test"
  title="test" loading="lazy" style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;">
      </picture>
      </a>
      </span>`,
    position: {
      start: { line: 68, column: 1, offset: 15708 },
      end: { line: 68, column: 124, offset: 15831 },
      indent: []
    },
    align: 'left',
    width: '600',
    height: '400',
    caption: null
  }

  const nodeCaptionMock = {
    type: 'html',
    value: `<figure class="gatsby-resp-image-figure" style="width: 379px; height: 293px;" data-align="left" data-width="379" data-height="293" data-caption="Deb and her Dad">
    <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 720px;">
    <a class="gatsby-resp-image-link" href="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg" style="display: block" target="_blank" rel="noopener">
    <span class="gatsby-resp-image-background-image" style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image:
    url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQ
    jhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAXAQEBAQEAAAAAAAA
    AAAAAAAACAQAD/9oADAMBAAIQAxAAAAG7DNiNvMoenSoMVxL/AP/EABsQAAIDAQEBAAAAAAAAAAAAAAECAAMREgQT/9oACAEBAAEFAu881T4itoLM0DQW5LEHzYcsSZ//xAAXEQADAQAAAAAAAAAAA
    AAAAAAAARAR/9oACAEDAQE/AUbf/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ASP/xAAYEAEBAAMAAAAAAAAAAAAAAAABECAxYf/aAAgBAQAGPwI7dYIT/8QAGxAAAwADAQEAAAAAAAA
    AAAAAAAERITFRQXH/2gAIAQEAAT8hcC5wFLXayG2PfGbEPVzfg1IapR9QrQKVbP/aAAwDAQACAAMAAAAQLy9C/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQMBAT8QtOkC7n//xAAZEQEAA
    gMAAAAAAAAAAAAAAAABABARITH/2gAIAQIBAT8QRTcyjyv/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMWFxofH/2gAIAQEAAT8QLONg9y3ItDe41KF5JnQlWnKq/kYQAWDo2DQX5ZRqIrYiNkH2hAm
    GJ//Z&apos;); background-size: cover; display: block;"></span>
    <picture>
    <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/c85cb/test.webp 300w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/e88ff/test.webp 600w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/bc514/test.webp 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/webp">
    <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/f93b5/test.jpg 300w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/b4294/test.jpg 600w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/jpeg">
    <img class="gatsby-resp-image-image" src="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg" alt="test"
    title="test" loading="lazy" style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;">
    </picture>
    </a>
    </span>
    <figcaption class="gatsby-resp-image-figcaption"><p>Deb and her Dad</p></figcaption>
    </figure>`,
    position: {
        start: { line: 68, column: 1, offset: 15708 },
        end: { line: 68, column: 124, offset: 15831 },
        indent: []
    },
    align: 'left',
    width: '600',
    height: '400',
    caption: null
}

  const astMock = {
    type: 'root',
    children: [
      {
        type: 'html',
        value: `<span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 720px;">
        <a class="gatsby-resp-image-link" href="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg" style="display: block" target="_blank" rel="noopener">
        <span class="gatsby-resp-image-background-image" style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image:
        url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQ
        jhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAXAQEBAQEAAAAAAAA
        AAAAAAAACAQAD/9oADAMBAAIQAxAAAAG7DNiNvMoenSoMVxL/AP/EABsQAAIDAQEBAAAAAAAAAAAAAAECAAMREgQT/9oACAEBAAEFAu881T4itoLM0DQW5LEHzYcsSZ//xAAXEQADAQAAAAAAAAAAA
        AAAAAAAARAR/9oACAEDAQE/AUbf/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ASP/xAAYEAEBAAMAAAAAAAAAAAAAAAABECAxYf/aAAgBAQAGPwI7dYIT/8QAGxAAAwADAQEAAAAAAAA
        AAAAAAAERITFRQXH/2gAIAQEAAT8hcC5wFLXayG2PfGbEPVzfg1IapR9QrQKVbP/aAAwDAQACAAMAAAAQLy9C/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQMBAT8QtOkC7n//xAAZEQEAA
        gMAAAAAAAAAAAAAAAABABARITH/2gAIAQIBAT8QRTcyjyv/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMWFxofH/2gAIAQEAAT8QLONg9y3ItDe41KF5JnQlWnKq/kYQAWDo2DQX5ZRqIrYiNkH2hAm
        GJ//Z&apos;); background-size: cover; display: block;"></span>
        <picture>
        <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/c85cb/test.webp 300w,
        /static/568c5d417f7ef32ba3bb5b95bdf0f42d/e88ff/test.webp 600w,
        /static/568c5d417f7ef32ba3bb5b95bdf0f42d/bc514/test.webp 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/webp">
        <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/f93b5/test.jpg 300w,
        /static/568c5d417f7ef32ba3bb5b95bdf0f42d/b4294/test.jpg 600w,
        /static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/jpeg">
        <img class="gatsby-resp-image-image" src="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg" alt="test"
        title="test" loading="lazy" style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;">
        </picture>
        </a>
        </span>`,
        position: {
              start: { line: 68, column: 1, offset: 15708 },
              end: { line: 68, column: 124, offset: 15831 },
              indent: []
        },
        align: 'left',
        width: '526',
        height: '526',
        caption: null
        },
    ],
    position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 93, column: 1, offset: 21282 }
    }
}

const nodeImageAttributesMock = {
  type: 'html',
  value: `<span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 720px;
">
  <a class="gatsby-resp-image-link" href="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg" style="display: block"
target="_blank" rel="noopener">
    <span class="gatsby-resp-image-background-image" style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image:
url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQ
jhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAXAQEBAQEAAAAAAAA
AAAAAAAACAQAD/9oADAMBAAIQAxAAAAG7DNiNvMoenSoMVxL/AP/EABsQAAIDAQEBAAAAAAAAAAAAAAECAAMREgQT/9oACAEBAAEFAu881T4itoLM0DQW5LEHzYcsSZ//xAAXEQADAQAAAAAAAAAAA
AAAAAAAARAR/9oACAEDAQE/AUbf/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ASP/xAAYEAEBAAMAAAAAAAAAAAAAAAABECAxYf/aAAgBAQAGPwI7dYIT/8QAGxAAAwADAQEAAAAAAAA
AAAAAAAERITFRQXH/2gAIAQEAAT8hcC5wFLXayG2PfGbEPVzfg1IapR9QrQKVbP/aAAwDAQACAAMAAAAQLy9C/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQMBAT8QtOkC7n//xAAZEQEAA
gMAAAAAAAAAAAAAAAABABARITH/2gAIAQIBAT8QRTcyjyv/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMWFxofH/2gAIAQEAAT8QLONg9y3ItDe41KF5JnQlWnKq/kYQAWDo2DQX5ZRqIrYiNkH2hAm
GJ//Z&apos;); background-size: cover; display: block;"></span>
    <picture>
    <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/c85cb/test.webp 300w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/e88ff/test.webp 600w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/bc514/test.webp 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/webp">
   <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/f93b5/test.jpg 300w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/b4294/test.jpg 600w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/jpeg">
    <img class="gatsby-resp-image-image" src="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg" alt="test"
title="test" loading="lazy" style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;">
    </picture>
    </a>
    </span>`,
  position: {
    start: { line: 68, column: 1, offset: 15708 },
    end: { line: 68, column: 124, offset: 15831 },
    indent: []
  },
  align: 'left',
  caption: null
}

const filesMock = [{
  id: '725468ea-90ea-505c-bbf3-af86b9029ec0',
  children: [ 'ecbec921-e3b4-5386-9cdc-fc7962ded21f' ],
  parent: null,
  internal: {
    contentDigest: '9cc3f55fcb4dcdf9a056d51498d9415f',
    type: 'File',
    mediaType: 'image/jpeg',
    description: 'File "/images/test.jpg"',
    owner: 'gatsby-source-filesystem',
    counter: 1570
  },
  sourceInstanceName: 'pages',
  relativePath: 'images/test.jpg',
  extension: 'jpg',
  prettySize: '97.5 kB',
  modifiedTime: '2021-03-04T21:36:49.058Z',
  accessTime: '2021-03-04T21:37:07.229Z',
  changeTime: '2021-03-04T21:37:01.791Z',
  birthTime: '2021-03-04T21:36:49.056Z',
  root: '/',
  dir: `/images`,
  base: 'test.jpg',
  ext: '.jpg',
  name: 'test',
  absolutePath: `/images/test.jpg`,
  relativeDirectory: 'images',
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  rdev: 0,
  blksize: 4096,
  ino: 594269138,
  size: 97518,
  blocks: 192,
  atimeMs: 1614893827228.6414,
  mtimeMs: 1614893809058.3716,
  ctimeMs: 1614893821790.7444,
  birthtimeMs: 1614893809055.759,
  atime: '2021-03-04T21:37:07.229Z',
  mtime: '2021-03-04T21:36:49.058Z',
  ctime: '2021-03-04T21:37:01.791Z',
  birthtime: '2021-03-04T21:36:49.056Z',
  __gatsby_resolved: undefined
}]

const mockAst = {
  "type": "root",
  "children": [
    {
      "type": "html",
      "value": `<span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 720px;">
      <a class="gatsby-resp-image-link" href="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg" style="display: block" target="_blank" rel="noopener">
      <span class="gatsby-resp-image-background-image" style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image:
      url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQ
      jhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAXAQEBAQEAAAAAAAA
      AAAAAAAACAQAD/9oADAMBAAIQAxAAAAG7DNiNvMoenSoMVxL/AP/EABsQAAIDAQEBAAAAAAAAAAAAAAECAAMREgQT/9oACAEBAAEFAu881T4itoLM0DQW5LEHzYcsSZ//xAAXEQADAQAAAAAAAAAAA
      AAAAAAAARAR/9oACAEDAQE/AUbf/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ASP/xAAYEAEBAAMAAAAAAAAAAAAAAAABECAxYf/aAAgBAQAGPwI7dYIT/8QAGxAAAwADAQEAAAAAAAA
      AAAAAAAERITFRQXH/2gAIAQEAAT8hcC5wFLXayG2PfGbEPVzfg1IapR9QrQKVbP/aAAwDAQACAAMAAAAQLy9C/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQMBAT8QtOkC7n//xAAZEQEAA
      gMAAAAAAAAAAAAAAAABABARITH/2gAIAQIBAT8QRTcyjyv/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMWFxofH/2gAIAQEAAT8QLONg9y3ItDe41KF5JnQlWnKq/kYQAWDo2DQX5ZRqIrYiNkH2hAm
      GJ//Z&apos;); background-size: cover; display: block;"></span>
          <picture>
          <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/c85cb/test.webp 300w,
          /static/568c5d417f7ef32ba3bb5b95bdf0f42d/e88ff/test.webp 600w,
          /static/568c5d417f7ef32ba3bb5b95bdf0f42d/bc514/test.webp 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/webp">
         <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/f93b5/test.jpg 300w,
          /static/568c5d417f7ef32ba3bb5b95bdf0f42d/b4294/test.jpg 600w,
          /static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/jpeg">
          <img class="gatsby-resp-image-image" src="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg" alt="test"
      title="test" loading="lazy" style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;">
          </picture>
          </a>
          </span>`,
      "width": "300",
      "height": "200",
      "align": "left",
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 95,
          "offset": 94
        }
      },
    }
  ],
  "position": {
    "start": {
      "line": 1,
      "column": 1,
      "offset": 0
    },
    "end": {
      "line": 1,
      "column": 95,
      "offset": 94
    }
  }
}

module.exports = {nodeMock, nodeCaptionMock, astMock, nodeImageAttributesMock, filesMock, mockAst};