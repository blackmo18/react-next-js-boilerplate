import {authorizedPage} from '../../utils/auths'

export default async (req, res) => {
    authorizedPage(req, res)
}