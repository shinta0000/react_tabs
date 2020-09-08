import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Main = () => {
  return (
    <main>
      <div className="tabs">
        <Tabs>
          <TabList>
            <Tab>hoge</Tab>
            <Tab>bar</Tab>
            <Tab>foo</Tab>
          </TabList>
          <TabPanel>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, dignissimos perferendis, nemo vitae quod veritatis enim deleniti ab est molestias, quisquam doloremque dolore ducimus. Aperiam non atque tempora voluptate inventore facilis quibusdam, nihil deserunt optio, fugiat alias beatae similique quidem.</h2>
          </TabPanel>
          <TabPanel>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis? Nisi nulla consectetur iure quasi quo iusto tempora laborum necessitatibus totam velit suscipit illum reiciendis molestias beatae perferendis, facilis rerum quisquam aliquid, temporibus veritatis. Placeat rem cupiditate harum doloribus atque.</h2>
          </TabPanel>
          <TabPanel>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit delectus id quaerat labore quo omnis aspernatur reiciendis nostrum ab quia suscipit laborum error hic consequatur, animi magnam neque quis veniam. Quidem perferendis cumque ipsa dolore laudantium placeat tempora voluptatem?</h2>
          </TabPanel>
        </Tabs>
      </div>
    </main>
  );
}

export { Main };