export interface IFile {
	id: string;
	name: string;
	type: string;
	accessLink: string;
	size: number;
	path: string;
	date: Date;
	user: string;
	parent: string;
	childs: Array<string>;
}
