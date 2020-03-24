import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Card from '../components/Card';
import fetch from 'node-fetch';
import { GetServerSideProps } from 'next';
import { formatPosts } from '../utils/formatPost';
import dayjs from 'dayjs';
import carlendarType from '../constant/carlendarType';
import styled from 'styled-components';

const TableRow = styled.div`
  display: flex;
`;

const TableCol = styled.div`
  flex: 1;
  padding: 8px;
`;
// import useSWR from 'swr';
// import fetcher from 'unfetch';
// import { UserContext } from '../contexts/userContext';
// import Router from 'next/router';
// import isEmpty from 'lodash.isempty';
// import axios from 'axios';

export interface IHomePageProps {
  posts: IPosts[];
  error: any;
}

export interface IPosts {
  name: string;
  dayOffs: IDayOffs[];
}

export interface IDayOffs {
  id: string;
  title: string;
  start_dt: string;
  end_dt: string;
  subcalendar_id: number;
}

function HomePage({ error, posts }: IHomePageProps) {
  // const { user } = useContext(UserContext);
  // const [data, setData] = useState({} as any);

  /**
   * Axios Fetch
   */
  // useEffect(() => {
  //   const fetchData = async () => {
  //     axios.defaults.withCredentials = false;
  //     const data = await axios({
  //       url:
  //         'https://teamup.com/sxsabx/events?startDate=2019-09-21&endDate=2020-09-21&tz=Asia%2FBangkok&query=%E0%B8%AD%E0%B8%B8%E0%B8%A2&offset=0&limit=100',
  //       method: 'get',
  //       headers: {
  //         'content-Type': 'application/json',
  //         Accept: '/',
  //         'Cache-Control': 'no-cache',
  //         Cookie: document.cookie,
  //       },
  //     });
  //     console.log(data);
  //     setData(data);
  //   };
  //   if (isEmpty(user)) {
  //     Router.push('/login');
  //   } else {
  //     fetchData();
  //   }
  // }, []);

  /**
   * Client Side Fetch
   */
  // const { data, error } = useSWR(
  //   () =>
  //     isEmpty(user)
  //       ? 'https://teamup.com/sxsabx/events?startDate=2019-09-21&endDate=2020-09-21&tz=Asia%2FBangkok&query=%E0%B8%AD%E0%B8%B8%E0%B8%A2&offset=0&limit=100'
  //       : null,
  //   fetcher,
  //   { shouldRetryOnError: false },
  // );

  console.log(posts);
  console.log(error);

  const calDiffDay = (day1: string, day2: string): number => {
    const d1 = dayjs(day1);
    const d2 = dayjs(day2);
    return -(d1.diff(d2, 'd') - 1);
  };

  return (
    <Layout>
      <Container>
        <Card>
          <TableRow style={{ borderBottom: '1px solid #cccccc' }}>
            <TableCol style={{ fontWeight: 'bold' }}>Name</TableCol>
            <TableCol style={{ fontWeight: 'bold' }}>Reason</TableCol>
            <TableCol style={{ fontWeight: 'bold' }}>Start Date</TableCol>
            <TableCol style={{ fontWeight: 'bold' }}>End Date</TableCol>
            <TableCol style={{ fontWeight: 'bold' }}>Day Off</TableCol>
          </TableRow>
          {posts.map(post => {
            let dayOffCounter = {} as any;
            return (
              <div key={post.name}>
                {post.dayOffs.map(dayOff => {
                  const dayLeaveCalcurateFromDate = calDiffDay(
                    dayOff.start_dt,
                    dayOff.end_dt,
                  );

                  if (!dayOffCounter[dayOff.subcalendar_id]) {
                    dayOffCounter[
                      dayOff.subcalendar_id
                    ] = dayLeaveCalcurateFromDate;
                  } else {
                    dayOffCounter[
                      dayOff.subcalendar_id
                    ] += dayLeaveCalcurateFromDate;
                  }
                  return (
                    <TableRow key={dayOff.id}>
                      <TableCol>{post.name}</TableCol>
                      <TableCol>{dayOff.title}</TableCol>
                      <TableCol>{dayOff.start_dt}</TableCol>
                      <TableCol>{dayOff.end_dt}</TableCol>
                      <TableCol>{dayLeaveCalcurateFromDate}</TableCol>
                    </TableRow>
                  );
                })}
                <TableRow style={{ background: '#eaeaea' }}>
                  <TableCol>{post.name}</TableCol>
                  <TableCol>vacation</TableCol>
                  <TableCol>
                    {dayOffCounter[carlendarType.vacation] || 0}
                  </TableCol>
                  <TableCol>Sick Leave</TableCol>
                  <TableCol>{dayOffCounter[carlendarType.sick] || 0}</TableCol>
                </TableRow>
              </div>
            );
          })}
        </Card>
      </Container>
    </Layout>
  );
}

/**
 * Server Side Fetch
 */
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const authToken = query.s;
  const searchQuery = query.q ? encodeURIComponent(query.q as string) : '';
  console.log(searchQuery);
  const startDate = '2020-01-01';
  const endDate = '2020-12-31';
  const res = await fetch(
    `https://teamup.com/sxsabx/events?startDate=${startDate}&endDate=${endDate}&tz=Asia%2FBangkok&query=${searchQuery}&offset=0&limit=100`,
    {
      headers: {
        cookie: `s=${authToken};`,
      },
    },
  );
  const posts = await res.json();
  const postFormated = formatPosts(posts);
  console.log(postFormated);

  return {
    props: {
      posts: postFormated,
    },
  };
};

export default HomePage;
