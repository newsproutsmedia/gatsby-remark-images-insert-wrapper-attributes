const nodeMock = {
    type: 'html',
    value: `<span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 720px;
  ">
    <a class="gatsby-resp-image-link" href="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/beforeafter.jpg" style="display: block"
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
      <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/c85cb/beforeafter.webp 300w,
      /static/568c5d417f7ef32ba3bb5b95bdf0f42d/e88ff/beforeafter.webp 600w,
      /static/568c5d417f7ef32ba3bb5b95bdf0f42d/bc514/beforeafter.webp 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/webp">
     <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/f93b5/beforeafter.jpg 300w,
      /static/568c5d417f7ef32ba3bb5b95bdf0f42d/b4294/beforeafter.jpg 600w,
      /static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/beforeafter.jpg 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/jpeg">
      <img class="gatsby-resp-image-image" src="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/beforeafter.jpg" alt="beforeafter"
  title="beforeafter" loading="lazy" style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;">
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
  }

  const nodeCaptionMock = {
    type: 'html',
    value: `<figure class="gatsby-resp-image-figure" style="width: 379px; height: 293px;" data-align="left" data-width="379" data-height="293" data-caption="Deb and her Dad">
    <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 720px;">
    <a class="gatsby-resp-image-link" href="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/beforeafter.jpg" style="display: block" target="_blank" rel="noopener">
    <span class="gatsby-resp-image-background-image" style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image:
    url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQ
    jhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAXAQEBAQEAAAAAAAA
    AAAAAAAACAQAD/9oADAMBAAIQAxAAAAG7DNiNvMoenSoMVxL/AP/EABsQAAIDAQEBAAAAAAAAAAAAAAECAAMREgQT/9oACAEBAAEFAu881T4itoLM0DQW5LEHzYcsSZ//xAAXEQADAQAAAAAAAAAAA
    AAAAAAAARAR/9oACAEDAQE/AUbf/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ASP/xAAYEAEBAAMAAAAAAAAAAAAAAAABECAxYf/aAAgBAQAGPwI7dYIT/8QAGxAAAwADAQEAAAAAAAA
    AAAAAAAERITFRQXH/2gAIAQEAAT8hcC5wFLXayG2PfGbEPVzfg1IapR9QrQKVbP/aAAwDAQACAAMAAAAQLy9C/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQMBAT8QtOkC7n//xAAZEQEAA
    gMAAAAAAAAAAAAAAAABABARITH/2gAIAQIBAT8QRTcyjyv/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMWFxofH/2gAIAQEAAT8QLONg9y3ItDe41KF5JnQlWnKq/kYQAWDo2DQX5ZRqIrYiNkH2hAm
    GJ//Z&apos;); background-size: cover; display: block;"></span>
    <picture>
    <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/c85cb/beforeafter.webp 300w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/e88ff/beforeafter.webp 600w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/bc514/beforeafter.webp 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/webp">
    <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/f93b5/beforeafter.jpg 300w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/b4294/beforeafter.jpg 600w,
    /static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/beforeafter.jpg 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/jpeg">
    <img class="gatsby-resp-image-image" src="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/beforeafter.jpg" alt="beforeafter"
    title="beforeafter" loading="lazy" style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;">
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
    width: '526',
    height: '526',
    caption: null
}

  const astMock = {
    type: 'root',
    children: [
      {
        type: 'html',
        value: `<span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 720px;">
        <a class="gatsby-resp-image-link" href="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/beforeafter.jpg" style="display: block" target="_blank" rel="noopener">
        <span class="gatsby-resp-image-background-image" style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image:
        url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQ
        jhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAXAQEBAQEAAAAAAAA
        AAAAAAAACAQAD/9oADAMBAAIQAxAAAAG7DNiNvMoenSoMVxL/AP/EABsQAAIDAQEBAAAAAAAAAAAAAAECAAMREgQT/9oACAEBAAEFAu881T4itoLM0DQW5LEHzYcsSZ//xAAXEQADAQAAAAAAAAAAA
        AAAAAAAARAR/9oACAEDAQE/AUbf/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ASP/xAAYEAEBAAMAAAAAAAAAAAAAAAABECAxYf/aAAgBAQAGPwI7dYIT/8QAGxAAAwADAQEAAAAAAAA
        AAAAAAAERITFRQXH/2gAIAQEAAT8hcC5wFLXayG2PfGbEPVzfg1IapR9QrQKVbP/aAAwDAQACAAMAAAAQLy9C/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQMBAT8QtOkC7n//xAAZEQEAA
        gMAAAAAAAAAAAAAAAABABARITH/2gAIAQIBAT8QRTcyjyv/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMWFxofH/2gAIAQEAAT8QLONg9y3ItDe41KF5JnQlWnKq/kYQAWDo2DQX5ZRqIrYiNkH2hAm
        GJ//Z&apos;); background-size: cover; display: block;"></span>
        <picture>
        <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/c85cb/beforeafter.webp 300w,
        /static/568c5d417f7ef32ba3bb5b95bdf0f42d/e88ff/beforeafter.webp 600w,
        /static/568c5d417f7ef32ba3bb5b95bdf0f42d/bc514/beforeafter.webp 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/webp">
        <source srcset="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/f93b5/beforeafter.jpg 300w,
        /static/568c5d417f7ef32ba3bb5b95bdf0f42d/b4294/beforeafter.jpg 600w,
        /static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/beforeafter.jpg 720w" sizes="(max-width: 720px) 100vw, 720px" type="image/jpeg">
        <img class="gatsby-resp-image-image" src="/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/beforeafter.jpg" alt="beforeafter"
        title="beforeafter" loading="lazy" style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;">
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

module.exports = {nodeMock, nodeCaptionMock, astMock};