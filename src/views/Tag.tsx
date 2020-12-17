import React from 'react';
import Layout from '../components/Layout';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';


const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<{ id: string }>();
  return (
    <Layout>
      {findTag(id).name}
    </Layout>
  );
};

export {Tag};