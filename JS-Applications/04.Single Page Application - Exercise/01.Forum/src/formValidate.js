export default function formDataValidate(form, topicId) {
    let formData = new FormData(form);
    let time = new Date();
    let data = {};

    if (form.parentNode.className === 'answer') {
        data = {
            topicId: topicId,
            username: formData.get('username'),
            comment: formData.get('postText'),
            time
        };
    } else {
        data = {
            topicName: formData.get('topicName'),
            username: formData.get('username'),
            postText: formData.get('postText'),
            time
        };
    }

    for (const key in data) {
        if (data[key] === '') {
            return undefined;
        }
    }

    return data;
}