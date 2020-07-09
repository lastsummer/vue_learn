const axios  = require('axios')

const jobTypeMap = {
  fit: {
    jobSource: 'testing',
    jobSourceMore: 'testing_more'
  },
  recommend: {
    jobSource: 'test_recom',
    jobSourceMore: 'test_recomore'
  },
  assign: {
    jobSource: 'chosjobcat',
    jobSourceMore: 'chos_more'
  }
}

function getUrlParam(url, type){
  try {
    let urlArr = url.split('?')
    let jobSource = ''
    if(jobTypeMap[type]) jobSource = `?jobSource=${jobTypeMap[type].jobSource}`
    return `${urlArr[0]}${jobSource}`
  } catch (error) {
    throw tool.handleError(error, `${serviceName} routerJobSearch`)
  }
}

function getCaseUrlParam(jobNo, cust, type){
  try {
    let url = `${cust}/seek_view.cfm?caseno=${jobNo}&cfrom=104Joblist&utm_source=104PC&utm_medium=JobList&utm_campaign=Postcase&prj=001`
    if(jobTypeMap[type]) url = `${url}&jobSource=${jobTypeMap[type].jobSource}`
    return url
  } catch (error) {
    console.log('error-->',error)
  }
}

function getTutorUrlParam(jobUrl, type){
  try {
    let url = jobUrl
    if(jobTypeMap[type]) url = `${url}&jobSource=${jobTypeMap[type].jobSource}`
    return url
  } catch (error) {
    console.log('error-->',error)
  }
}

function getJobUrl(jobObj, type){
  try {
    const jobNo = parseInt(jobObj.jobRo)
    if(jobNo===5){
      return getCaseUrlParam(jobObj.jobNo, jobObj.link.cust, type)
    }else if(jobNo===6){
      return getTutorUrlParam(jobObj.link.job, type)
    }
    return getUrlParam(jobObj.link.job, type)
    
  } catch (error) {
    console.log('error-->',error)
  }
}

async function searchJob () {
  // const url = `https://www.104-staging.com.tw/jobs/search/api/norm?order=11&asc=2&ro=0&jobcat=2012001002&indcat=1000000000&area=6001001000&jobexp=1`
  const url = `https://www.104-staging.com.tw/jobs/search/api/norm?order=11&asc=2&ro=0&jobcat=2016000000&ro=6`
  // const url = 'https://case.104.com.tw/seek_view.cfm?caseno=1222140&cfrom=104Joblist&utm_source=104PC&utm_medium=JobList&utm_campaign=Postcase'
  try {
    const result = await axios({
      method: 'get',
      url,
      headers: {
        referer: `https://www.104-staging.com.tw`
      }
    })

    const type = 'recommend'
    let jobList = []
    for (let jobObj of result.data.data.list) {
        // console.log('jobObj-->', jobObj)
        jobList.push({
          jobName: jobObj.jobName,
          custName: jobObj.custName,
          jobAddrNoDesc: jobObj.jobAddrNoDesc,
          periodDesc: jobObj.periodDesc,
          optionEdu: jobObj.optionEdu,
          link: getJobUrl(jobObj, type)
        })
    }

    console.log('result.data--->', jobList)
    /*
    const result2 = await axios({
      method: 'post',
      url,
      data: { prj: '001',  caseno: '1222140'}
    })
    */

    // console.log('result2.data--->', result2.data.length)
    return result.data || {}
  } catch (error) {
    console.log('error--->', error)
  }
}

const a = searchJob()