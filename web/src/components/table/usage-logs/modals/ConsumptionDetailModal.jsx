/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React, { useState } from 'react';
import { Modal, Button, Typography, Space } from '@douyinfe/semi-ui';
import { IconCopy } from '@douyinfe/semi-icons';

const ConsumptionDetailModal = ({ visible, onCancel, userQuestion, aiResponse, copyText, t }) => {
  const [questionExpanded, setQuestionExpanded] = useState(false);
  const [responseExpanded, setResponseExpanded] = useState(false);

  return (
    <Modal
      title={t('详细显示')}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      style={{ width: 700 }}
    >
      <Space vertical align='start' style={{ width: '100%' }}>
        <div style={{ width: '100%' }}>
          <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography.Text strong>{t('用户提问')}</Typography.Text>
            <Button
              icon={<IconCopy />}
              size='small'
              onClick={(e) => copyText(e, userQuestion || '')}
            >
              {t('复制')}
            </Button>
          </div>
          <Typography.Paragraph
            ellipsis={questionExpanded ? false : {
              rows: 2,
            }}
            style={{
              padding: 12,
              backgroundColor: 'var(--semi-color-fill-0)',
              borderRadius: 4,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {userQuestion || t('无内容')}
          </Typography.Paragraph>
          {userQuestion && userQuestion.split('\n').length > 2 && (
            <Button
              size='small'
              type='tertiary'
              onClick={() => setQuestionExpanded(!questionExpanded)}
            >
              {questionExpanded ? t('收起') : t('展开')}
            </Button>
          )}
        </div>

        <div style={{ width: '100%', marginTop: 16 }}>
          <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography.Text strong>{t('模型回复')}</Typography.Text>
            <Button
              icon={<IconCopy />}
              size='small'
              onClick={(e) => copyText(e, aiResponse || '')}
            >
              {t('复制')}
            </Button>
          </div>
          <Typography.Paragraph
            ellipsis={responseExpanded ? false : {
              rows: 2,
            }}
            style={{
              padding: 12,
              backgroundColor: 'var(--semi-color-fill-0)',
              borderRadius: 4,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {aiResponse || t('无内容')}
          </Typography.Paragraph>
          {aiResponse && aiResponse.split('\n').length > 2 && (
            <Button
              size='small'
              type='tertiary'
              onClick={() => setResponseExpanded(!responseExpanded)}
            >
              {responseExpanded ? t('收起') : t('展开')}
            </Button>
          )}
        </div>
      </Space>
    </Modal>
  );
};

export default ConsumptionDetailModal;
