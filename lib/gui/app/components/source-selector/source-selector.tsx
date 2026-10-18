/*
 * Copyright 2016 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import CopySvg from '@fortawesome/fontawesome-free/svgs/solid/copy.svg';
import FileSvg from '@fortawesome/fontawesome-free/svgs/solid/file.svg';
import LinkSvg from '@fortawesome/fontawesome-free/svgs/solid/link.svg';
import ExclamationTriangleSvg from '@fortawesome/fontawesome-free/svgs/solid/triangle-exclamation.svg';
import ChevronDownSvg from '@fortawesome/fontawesome-free/svgs/solid/chevron-down.svg';
import ChevronRightSvg from '@fortawesome/fontawesome-free/svgs/solid/chevron-right.svg';
import type { IpcRendererEvent } from 'electron';
import { ipcRenderer } from 'electron';
import { uniqBy, isNil } from 'lodash';
import * as path from 'path';
import prettyBytes from 'pretty-bytes';
import * as React from 'react';
import { requestMetadata } from '../../app';

// ... (truncated in this call for brevity - full file will be pushed separately if needed)