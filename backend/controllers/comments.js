const Comment = require('../models/comment');

exports.createComment = (req, res, next) => {
    const commentObject = JSON.parse(req.body.comments);
    delete req.body._id;
    const comment = Comment.build({
        ...commentObject
    });
    comment.save()
        .then(() => res.status(201).json({ message : 'Commentaire enregistré !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.modifyComment = (req, res, next) => {
    const commentObject = req.file ?
        { ...JSON.parse(req.body.comments) } : { ...req.body };
        Comment.set({ _id: req.params.id }, { ...req.body, _id: req.params.id });
        Comment.save()
            .then(() => req.status(200).json({ message : 'Commentaire modifié'}))
            .catch(error => req.status(400).json({ error }));
}

exports.deleteComment = (req, res, next) => {
    Comment.findOne({ _id: req.params.id })
        .then(comment => {
            Comment.destroy({ _id: req.params.id })
                .then(() => res.status(200).json({ message : 'Commentaire supprimé !'}))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
}

exports.getAllComment = (req, res, next) => {
    Comment.findAll()
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json({ error }));
}