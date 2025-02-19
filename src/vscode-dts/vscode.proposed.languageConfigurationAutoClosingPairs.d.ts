/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module 'vscode' {

	// https://github.com/microsoft/vscode/issues/173738 @alexdima

	export interface LanguageConfiguration {
		autoClosingPairs?: {
			open: string;
			close: string;
			notIn?: string[];
		}[];
	}
}
