const Publication = require('../models/publication');

exports.createPublication = (req, res, next) => {
    const publicationObject = JSON.parse(req.body.publications);
    delete req.body._id;
    const publication = Publication.build({
        ...publicationObject
    });
    publication.save()
        .then(() => res.status(201).json({ message : 'Publication enregistrée !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.modifyPublication = (req, res, next) => {
    const publicationObject = req.file ?
        { ...JSON.parse(req.body.publications) } : { ...req.body };
        Publication.set({ _id: req.params.id }, { ...req.body, _id: req.params.id });
        Publication.save()
            .then(() => req.status(200).json({ message : 'Publication modifiée !'}))
            .catch(error => req.status(400).json({ error }));
}

exports.deletePublication = (req, res, next) => {
    Publication.findOne({ _id: req.params.id })
        .then(comment => {
            Publication.destroy({ _id: req.params.id })
                .then(() => res.status(200).json({ message : 'Publication supprimée !'}))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
}

exports.getAllPublication = (req, res, next) => {
    Publication.findAll()
        .then(publications => res.status(200).json(publications))
        .catch(error => res.status(400).json({ error }));
}