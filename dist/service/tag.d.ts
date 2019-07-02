import { NPMContext } from '../index';
import { Component } from '@nelts/nelts';
export default class TagService extends Component.Service<NPMContext> {
    private configs;
    constructor(ctx: NPMContext);
    getTagsCache(pid: number): Promise<{
        [name: string]: number;
    }>;
    getChunksByPidAndName(pid: number, name: string): Promise<import("../sequelize/tag").default[]>;
    createNewTag(pid: number, name: string, vid: number): Promise<import("../sequelize/tag").default>;
    getVidAndNameByPid(pid: number): Promise<import("../sequelize/tag").default[]>;
}
