import { lt as lowerThan, gte as greaterThan, coerce } from 'semver';

export const formatAttachmentUrl = (attachmentUrl, userId, token, server) => {
	if (attachmentUrl.startsWith('http')) {
		if (attachmentUrl.includes('rc_token')) {
			return encodeURI(attachmentUrl);
		}
		return encodeURI(`${ attachmentUrl }?rc_uid=${ userId }&rc_token=${ token }`);
	}
	return encodeURI(`${ server }${ attachmentUrl }?rc_uid=${ userId }&rc_token=${ token }`);
};

export const lt = (currentServerVersion, oldServerVersion) => lowerThan(coerce(currentServerVersion), oldServerVersion);

export const gte = (currentServerVersion, oldServerVersion) => greaterThan(coerce(currentServerVersion), oldServerVersion);
