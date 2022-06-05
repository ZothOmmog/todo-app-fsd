import { Col, Layout, Row } from 'antd';
import { useGate, useStore } from 'effector-react';
import React from 'react';

import { TaskList } from 'widgets/taskList';

import { AddTaskButton } from 'features/addTask';

import { TaskListLoading, taskModel } from 'entities/task';

import { Logo } from 'shared/ui';

import { TaskListPageGate } from '../../model';

import style from './taskListPage.module.scss';

export const TaskListPage: React.FC = () => {
  useGate(TaskListPageGate);
  const isReady = useStore(taskModel.$isReadyTaskShortList);

  return (
    <div>
      {isReady ? (
        <Layout className={style.root}>
          <Layout.Header>
            <Row align="middle" wrap={false} justify="space-between">
              <Col>
                <Logo />
              </Col>
              <Col>
                <AddTaskButton />
              </Col>
            </Row>
          </Layout.Header>
          <Layout.Content className={style.content}>
            <TaskList className={style.taskList} />
          </Layout.Content>
        </Layout>
      ) : (
        <TaskListLoading />
      )}
    </div>
  );
};
