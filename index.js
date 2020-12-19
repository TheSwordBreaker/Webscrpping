const axios = require('axios');
const cheerio = require('cheerio');

const getBid = async (url) => {

  try {

  const html = await axios.get(url);
  const $ = cheerio.load(html.data)
  let data = []
  // console.log($('.FreelancerInfo-text-primary')[1].text())
  $('.FreelancerInfo-text-primary').each((i, elem) => {
      //if( i === 1) console.log($(elem).html())
      data.push({
        big: $(elem).find('.FreelancerInfo-about').attr('data-descr-full'),
        short: $(elem).find('.FreelancerInfo-about').attr
        ('data-descr-short')
      })
    
  });

  console.log(data);
  }
  catch (err) {
    console.log(err)
  }


}

url = 'https://www.freelancer.com/projects/php/Database-CMS-Backend-Build-for-28620394/?ngsw-bypass=&w=f'

getBid(url)